import Hero from "../components/Hero/Hero";
import AboutPreview from "../components/AboutPreview/AboutPreview";
import ConstellationsPreview from "../components/ConstellationsPreview/ConstellationsPreview";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ConstellationsPreview />
      <FeaturedProducts />
    </>
  );
}

export default Home;
