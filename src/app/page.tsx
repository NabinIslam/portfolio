import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import MyPortfolio from '@/components/MyPortfolio';

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <MyPortfolio />
      <Contact />
    </main>
  );
};

export default Home;
