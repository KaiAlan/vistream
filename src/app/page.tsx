import { CarouselPlugin } from "@/components/main-carousel";
import Image from "next/image";
import Carousel from "@/components/carousel-with-framer-motion";
import CardGallery from "@/components/card-line-gallary";

// import Carousel from '@/components/carousel'
// const DATA = [
//   { image: 'https://picsum.photos/seed/random101/500/500' },
//   { image: 'https://picsum.photos/seed/random102/500/500' },
//   { image: 'https://picsum.photos/seed/random103/500/500' },
// ]


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
        <h1>Home Page</h1>
        {/* <Carousel /> */}
      {/* <div className="w-[1440px] h-[500px]"> */}
        <CarouselPlugin />
      {/* </div> */}
      <div>
        <CardGallery />
      </div>
    </main>
  );
}
