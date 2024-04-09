/* eslint-disable @next/next/no-img-element */
import EarringCrop from './components/EarringCrop';
import ImageCropProvider from './providers/ImageCropProvider';

import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">



<header className="buttons flex justify-between items-center">



<div className="flex flex-row  items-center">
<Image src={'/dragonear.png'} alt="Logo" width="150" height="150"/>
<div className="flex flex-col info">
<h1>dragonear</h1>
<p>add jewellery and drop in the desired locations!</p>
</div>
</div>
<div>

      <ImageCropProvider>

      <EarringCrop/>
      </ImageCropProvider>
      </div>
      </header>
<div className="ear-container">
      <img src={'/ear.png'} alt="ear" className="ear" id="left"/>

      <img src={'/ear.png'} alt="ear" className="ear" id="right"/>
      </div>
      </main>
  );
}
