import ParallaxSection from "@/components/ParallaxSection";

export default function Page() {

  return (
    <main>
        {[1, 2, 3, 4, 5].map((image) => (
          <ParallaxSection backgroundImage={`/bg-${image}.webp`} key={image}/>
        ))}
    </main>
  )
}
