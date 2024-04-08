/* eslint-disable @next/next/no-img-element */
import EarringCrop from './components/EarringCrop';
import ImageCropProvider from './providers/ImageCropProvider';

import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">



<header className="buttons flex justify-between items-center">



<div>
<Image src={'/dragonear.png'} alt="Logo" width="150" height="150"/>

</div>

<div>

      <ImageCropProvider>

      <EarringCrop/>
      </ImageCropProvider>
      </div>
      </header>
<div className="ear-container">
      <img src={'/13467.jpg'} alt="ear" id="ear"/>
      </div>
      </main>
  );
}
