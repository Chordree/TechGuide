import "../styles/hero.css";
import img3 from "../assets/img3.jpg";
const Hero = () => {
  return (
    <section className="hero">
      <img src={img3} alt="" width='800' height='800' />
      <h1>
        <span style={{color:'darkgoldenrod'}}>
          Tech in your Neighborhood. <br/>
          let's Create, Code and Build Always test <br />
        </span>
        Read the Tech Stack Guide below this section
      </h1>
    </section>
  );
};

export default Hero;


