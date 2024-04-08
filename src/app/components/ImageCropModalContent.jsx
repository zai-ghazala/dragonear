
import { Button } from 'antd';
import Cropper from '../components/cropper/Cropper';
import { RotationSlider, ZoomSlider } from '../components/cropper/Sliders';

const ImageCropModalContent = ({ handleDone, handleClose }) => {

  return (
    <div className="text-center relative">
        <div className="flex justify-center">
          <div className="crop-container mb-4">
            <Cropper />
          </div>
        </div>
        <ZoomSlider className="mb-4" />
        <RotationSlider className="mb-4" />
        
        <div className="flex gap-2 justify-center">
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={handleDone}>
            save
          </Button>
        </div>
      </div>
  );
};

export default ImageCropModalContent;
