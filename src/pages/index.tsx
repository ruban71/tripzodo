

import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import HeroSection from "@/component/home/herosection";
import PopularPackages from "./home/popularpackages";
import Trips from "./home/trips";
import RealAdventure from "./home/real_adventure";
import GroupTours from "./home/grouptours";
import Testimonial from "./home/testimonial";
import FeaturesCard from "./home/feacturetures";
import LatestBlog from "./home/latestblog";
import AdventureSection from "./home/adventutresection";
import TravelHeroSection from "./home/travelherosection";
import WelcomeHolidays from "@/component/common/welcome_holidays";
import TrendingTours from "./home/trending_tours";
import Contactall from "@/component/common/contactall";
import GetUpdates from "@/component/common/getupdates";
import TravelIntro from "@/component/common/travelintro";



export default function Home() {
  return (
    <div>
   <Header/>
   <HeroSection/>
   <PopularPackages/>
   <WelcomeHolidays/>
   <TravelIntro/>
   <Trips/>
   <RealAdventure/>
   <GroupTours/>
   <Testimonial/>
   <TravelHeroSection/>
   <FeaturesCard/>
   <LatestBlog/>
   <AdventureSection/>
   <TrendingTours/>
   <Contactall/>
   <GetUpdates/>
   <Footer/>
    </div>
  );
}
