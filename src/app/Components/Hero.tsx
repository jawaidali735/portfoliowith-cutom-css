import Image from 'next/image';
import "../styles/hero.css";


const Hero = () => {
  return (
    <div>
    <div className="hero-section">
 
      <div className="hero-text">
        <h1>Hi, I&apos;m Jawaid Ali</h1>
        <p>
          I&apos;m a passionate developer specializing in creating dynamic and beautiful web experiences.
          With TypeScript, CSS, Nextjs, and more, I aim to bring creative and functional solutions
          to life. Welcome to my portfolio!
        </p>
        <a href="#contact" className="hero-button">Contact Me</a>
      </div>
  
      <div className="hero-image">
        <Image src="/1.png" alt="Jawaid Ali" width={500} height={500} />
      </div>
      
    </div>
    
    </div>
    
  );
};

export default Hero;
