// https://motion-primitives.com/docs/infinite-slider
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";

export function LogoCloud() {
  return (
    <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] overflow-hidden py-4">
      <InfiniteSlider gap={42} reverse speed={80} speedOnHover={25}>
        {logos.map((logo) => (
          <Image
            alt={logo.alt}
            className="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert w-auto"
            height={1080}
            width={1920}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}

const logos = [
  {
    src: "/product/cap-enak.png",
    alt: "Cap Enak",
  },
  {
    src: "/product/indoeskrim.png",
    alt: "Indoeskrim",
  },
  {
    src: "/product/indomilk.png",
    alt: "Indomilk",
  },
  {
    src: "/product/milkuat.png",
    alt: "Milkuat",
  },
  {
    src: "/product/orcid-butter.png",
    alt: "Orcid Butter",
  },
  {
    src: "/product/tiga-sapi.png",
    alt: "Tiga Sapi",
  },
];
