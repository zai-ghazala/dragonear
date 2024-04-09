/* eslint-disable @next/next/no-img-element */
"use client"; 

import { useState} from 'react';
import { Modal } from 'antd';
import Image from "next/image";
import { readFile } from '../helpers/cropImage';
import ImageCropModalContent from './ImageCropModalContent';
import { useImageCropContext } from '../providers/ImageCropProvider';
import { useDraggable } from '../hooks/useDraggable';

const EarringCrop = () => {
  const [openModal, setOpenModal] = useState(false);
  const [previewArray, setPreviewArray] = useState([]);
  const { getProcessedImage, setImage, getTransparentImage } = useImageCropContext();
  const [ref] = useDraggable();


  const handleDone = async () => {
    const processed = await getProcessedImage()
    const transparent = await getTransparentImage(processed)
    setPreviewArray((previewArray) => [...previewArray, transparent])
    setOpenModal(false);
  }

  const handleFileChange = async ({ target: { files } }) => {
    const file = files && files[0];
    const imageDataUrl = await readFile(file);
    setImage(imageDataUrl);
    setOpenModal(true);
  };



return (
    <>
      <label htmlFor="upload-photo" className="flex flex-row"><Image className="lilac" src={'/earrings.png'} alt="Upload" width="60" height="60" />+</label>
      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        id="upload-photo"
        accept="image/*" />

      {previewArray.map((url, idx) => <img draggable="false" className="draggable" key={`image-${idx}`} ref={ref} width="100" height="100" src={url} alt="jewellery"/>)}

      <Modal open={openModal} closeIcon={null} footer={null}>
        <ImageCropModalContent handleDone={handleDone} handleClose={() => setOpenModal(false)} />
      </Modal>
    
   </>
  );
};

export default EarringCrop;
