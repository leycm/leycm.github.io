import Image, { StaticImageData } from "next/image";
import { CarouselWrapper } from "./carousel-client";

export default function Carousel({ images, title }: { images: StaticImageData[]; title: string; }) {
  return (
    <div className="w-full overflow-hidden">
      <CarouselWrapper>
        {images.map((image, index) => (
          <div 
            className="flex-[0_0_100%] min-w-0 px-1 sm:px-2" 
            key={`carousel-${index}`}
          >
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image 
                src={image} 
                alt={`Carousel image ${index + 1} of ${title}`} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </CarouselWrapper>
    </div>
  )
}
