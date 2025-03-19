import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Map } from "./_components/map";
import { Services } from "./_components/feminino";
import { Infantil } from "./_components/infantil";
import { Masculina } from "./_components/maculina";
import { Testimonials } from "./_components/testimonials";
import { Footer } from "./_components/footer";
import { Low } from "./_components/low";


export default function Home() {
  return(
    <main>
      <Hero/>
      <About/>
      <Services/>
     <Infantil/>
     <Masculina/>
     <Testimonials/>
     <Footer/>
      <Map/>
      <Low/>
    </main>
  )
}