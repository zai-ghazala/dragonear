/* eslint-disable @next/next/no-img-element */
import EarringCrop from './components/EarringCrop';
import ImageCropProvider from './providers/ImageCropProvider';

import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full relative">



<header className="w-full buttons">

<div className="flex justify-end">


      <ImageCropProvider>

      <EarringCrop/>
      </ImageCropProvider>
      </div>

      </header>
<div className="ear-container">
      <img src={'/13467.jpg'} alt="ear" id="ear"/>
      </div>
        <header className="w-full title">
        <div className="flex justify-start flex-row">


        <Image src={'/dragonear.png'} alt="Logo" width="100" height="100"/>
      <h1>DRAGONEAR</h1>
        </div>
        </header>
      </main>
  );
}
