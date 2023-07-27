import bgVid from "../assets";

const About = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline className="bg-vid">
        <source src={bgVid} type="video/mp4" />
      </video>
      <div className="content">
        <h2>About Us</h2>
        <p>
        FashionFest is a trailblazing fashion event hosting company with a passion for creativity, innovation, and excellence.<br></br>
        Our team of dedicated fashion enthusiasts and event professionals work tirelessly to curate spectacular fashion events <br></br>
        that showcase the latest trends, cutting-edge designs, and emerging talents in the industry.<br></br>
        We pride ourselves on fostering a community where everyone feels welcome and inspired to embrace their unique style.
        </p>
        <p style={{textAlign:"right"}}>
        Whether you're a designer looking to showcase your collection, an influencer eager to collaborate,<br></br>
        or a fashion enthusiast seeking inspiration, we invite you to be part of our FashionFest family. <br></br>
        Follow us on social media, sign up for our newsletter, and stay tuned for updates on our upcoming events.<br></br>
        Together, let's embark on a journey that celebrates the beauty of fashion and the art of self-expression.
        </p>
        <h1><span className="magic">On 12:11:2023</span></h1>
      </div>
    </div>
  );
};

export default About;
