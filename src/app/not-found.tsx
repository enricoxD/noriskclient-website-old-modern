import {Button} from "@/components/global/Button";

export default function NotFoundPage() {
  return (
    <section className={"hero-section section is-flex-column"}>
      <h1 className={"title error-text"}>This page cannot be found...</h1>
      <h2 className={"subtitle"} style={{marginBottom: "15rem"}}>Error 404</h2>
      <Button href={"/"}>
        <p>Go back</p>
      </Button>
    </section>
  )
}
