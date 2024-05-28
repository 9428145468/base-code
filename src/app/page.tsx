import React from "react";
import Navbar from "./components/Navbar";
//import Card from './components/Card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to my site</h1>

        <Carousel className="main-carousel">
          <CarouselContent>
            <CarouselItem>
              <img
                src="../images/bg.jpeg"
                alt="Image 1"
                className="w-full h-[307px]"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="../images/bg.jpeg"
                alt="Image 2"
                className="w-full h-[307px]"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="../images/bg.jpeg"
                alt="Image 3"
                className="w-full h-[307px]"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="../images/bg.jpeg"
                alt="Image 4"
                className="w-full h-[307px]"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="../images/bg.jpeg"
                alt="Image 5"
                className="w-full h-[307px]"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <h2 className="text-3xl font-bold mt-10 mb-4">Right now</h2>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <img src="../images/bg.jpeg" alt="Image 1" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img src="../images/bg.jpeg" alt="Image 1" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img src="../images/bg.jpeg" alt="Image 1" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img src="../images/bg.jpeg" alt="Image 1" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img src="../images/bg.jpeg" alt="Image 1" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img src="../images/bg.jpeg" alt="Image 1" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <p className="text-lg mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
      </main>

      <footer className="text-center py-4 bg-gray-800 text-white">
        &copy; {new Date().getFullYear()}
        My App
      </footer>
    </div>
  );
};

export default HomePage;
