import {Button} from "@/components/global/Button";
import HeroSection from "@/components/HeroSection";
import {Text} from "@/components/global/textmedia/Text";
import {mdiHome} from "@mdi/js";

export default function NotFoundPage() {
  return (
    <>
      <HeroSection>
        <Text
          title={"Error 404"}
          text={"This page could not be found."}
          buttonIcon={mdiHome}
          buttonLabel={"Go Back"}
          buttonHref={"/"}
          titleClassName={"is-warning"}
        />
      </HeroSection>
    </>
  )
}
