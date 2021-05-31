import Banner from '../../components/Banner';
import BusinessCard from '../../components/BusinessCard';
import Testimonial from '../../components/Testimonial'


function Home() {

  return (
    <>
      <Banner />
      <BusinessCard reference={"/sobre"} buttonText={"Saiba mais"}/>
      <Testimonial />
    </>
  )
}

export default Home;
