import React from 'react'
import TiltedCard from './animations/TiltedCard'
const Hovercard = () => {
  return (

    <div className='flex gap-10 justify-center'>
      <TiltedCard
  imageSrc="/public/card2.jpg"
  captionText="DOGDE - Challenger"
  containerHeight="350px"
  containerWidth="350px"
  imageHeight="350px"
  imageWidth="350px"
  rotateAmplitude={12}
  scaleOnHover={1.1}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  
  overlayContent={
    <p className="pointer-events-none absolute left-0 top-5 rounded-[4px] bg-[#2d2d2d] px-[10px] py-[4px] text-[15px] text-[#fff]  ">
    DOGDE CHALLENGER
    </p>
  }
/>
<TiltedCard
  imageSrc="/public/card11.jpg"
  captionText="DOGDE - Challenger"
  containerHeight="350px"
  containerWidth="350px"
  imageHeight="350px"
  imageWidth="350px"
  rotateAmplitude={12}
  scaleOnHover={1.1}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  
  overlayContent={
    <p className="pointer-events-none absolute left-0 top-5 rounded-[4px] bg-[#2d2d2d] px-[10px] py-[4px] text-[15px] text-[#fff] ">
    LAMBORGHINI AVENTROD 
    </p>
  }
/>
<TiltedCard
  imageSrc="/public/card44.jpg"
  captionText="DOGDE - Challenger"
  containerHeight="350px"
  containerWidth="350px"
  imageHeight="350px"
  imageWidth="350px"
  rotateAmplitude={12}
  scaleOnHover={1.1}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  
  overlayContent={
    <p className="pointer-events-none absolute left-0 top-5 rounded-[4px] bg-[#2d2d2d] px-[10px] py-[4px] text-[15px] text-[#fff] ">
    JAEGER AMLAND
    </p>
  }
/>


    </div>
  )
}

export default Hovercard
