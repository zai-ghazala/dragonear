
/* eslint-disable @next/next/no-img-element */
"use client"; 
import { useState, useCallback, useEffect} from 'react';

export const useDraggable = () => {
  const [node, setNode] = useState(null);
  const [{ dx, dy }, setOffset] = useState({
      dx: 0,
      dy: 0,
  });

  const ref = useCallback((nodeEle) => {
      setNode(nodeEle);
  }, []);

  const handleMouseDown = useCallback((e) => {
      const startPos = {
          x: e.clientX - dx,
          y: e.clientY - dy,
      };

      const handleMouseMove = (e) => {
          const dx = e.clientX - startPos.x;
          const dy = e.clientY - startPos.y;
          setOffset({ dx, dy });
      };

      const handleMouseUp = () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
  }, [dx, dy]);

  const handleTouchStart = useCallback((e) => {
      const touch = e.touches[0];

      const startPos = {
          x: touch.clientX - dx,
          y: touch.clientY - dy,
      };

      const handleTouchMove = (e) => {
          const touch = e.touches[0];
          const dx = touch.clientX - startPos.x;
          const dy = touch.clientY - startPos.y;
          setOffset({ dx, dy });
      };

      const handleTouchEnd = () => {
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
      };

      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
  }, [dx, dy]);

  useEffect(() => {
      if (node) {
          node.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      }
  }, [node, dx, dy]);

  useEffect(() => {
      if (!node) {
          return;
      }
      node.addEventListener("mousedown", handleMouseDown);
      node.addEventListener("touchstart", handleTouchStart);
      return () => {
          node.removeEventListener("mousedown", handleMouseDown);
          node.removeEventListener("touchstart", handleTouchStart);
      };
  }, [node, dx, dy]);

  return [ref];
};
