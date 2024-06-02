import AutoScroll from "embla-carousel-auto-scroll";
import ServiceTitle from "./ServiceTitle";
import ServiceCircle from "./ServiceCircle";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent } from "@/components/ui/carousel";

const ServiceCarousel = () => {
  const dotColor = "#D34F4D";
  const services: string[] = [
    "Nutrición",
    "Medicina",
    "Kinesiología",
    "T. Ocupacional",
    "Psicología",
    "Fonoaudiología",
    "Psicopedagogía",
  ];

  const [speed, setSpeed] = useState(1.5);

  useEffect(() => {
    const adjustSpeed = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSpeed(0.5); // Velocidad para móviles
      } else if (width < 1024) {
        setSpeed(1.0); // Velocidad para tabletas
      } else {
        setSpeed(1.5); // Velocidad para escritorios
      }
    };

    adjustSpeed();
    window.addEventListener("resize", adjustSpeed);
    return () => {
      window.removeEventListener("resize", adjustSpeed);
    };
  }, []);

  return (
    <div className="py-2 sm:py-5 md:py-10">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
          active: true,
          align: "center",
        }}
        plugins={[
          AutoScroll({
            speed: speed,
            startDelay: 500,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
            stopOnFocusIn: false,
          }),
        ]}
      >
        <CarouselContent>
          {services.map((service, index) => (
            <>
              <ServiceTitle title={service} key={index} />
              <ServiceCircle dotColor={dotColor} key={index + 1} />
            </>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
