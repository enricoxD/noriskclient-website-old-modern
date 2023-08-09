import Section from "@/components/global/Section";

export const ButtonSection = ({children, backgroundColor}: {
  children: React.ReactNode,
  backgroundColor: 'default' | 'variant' | 'beige' | 'footer'
}) => {
  return (
    <Section backgroundColor={backgroundColor} innerClassName={"button-section"}>
      {children}
    </Section>
  )
}