import {ComponentProps} from "react";

interface HeroSectionProps extends ComponentProps<"div">{
  landingpage?: boolean;
}

export default function HeroSection({landingpage, children}: HeroSectionProps) {

  return (
    <div className={`herosection ${landingpage ? "landingpage" : ""}`}>
      <div className={"container"}>
        {children}
      </div>
    </div>
  )
}