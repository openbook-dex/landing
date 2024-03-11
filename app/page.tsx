import Hero from './component/LandingPage/Hero';
import Opos from './component/LandingPage/Opos';
import WhoWeAre from './component/LandingPage/WhoWeAre';
import Security from './component/LandingPage/Security';
import BuildingOnTheBook from './component/LandingPage/BuildingOnTheBook';
export default function Home() {
  return (
    <div className='w-full h-full relative'>
      <Hero />
      <Opos />
      <WhoWeAre />
      <Security />
      <BuildingOnTheBook />
      <div className="w-full z-0 h-full bg-[url('/assets/base.png')] opacity-60 bg-no-repeat bg-bottom absolute top-0 left-0"></div>
    </div>
  );
}
