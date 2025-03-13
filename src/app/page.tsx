import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Map } from "./_components/map";
import { Services } from "./_components/feminino";


export default function Home() {
  return(
    <main>
      <Hero/>
      <About/>
      <Services/>
     
      <Map/>
    </main>
  )
}