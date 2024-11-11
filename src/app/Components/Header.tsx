import Link from "next/link";
import '../styles/header.css'


const Header = ()=> {
    return (
        <header className="header">
        
        <div className="logo">
          <h2>Jawaid </h2>
        </div>
  
        
        <nav className="nav-links">
          <Link href="/">
            <div className=" text-[#f3ac09]">Home</div>
          </Link>
          <Link href="/#about">
            <div className="nav-item">About</div>
          </Link>
          <Link href="/#skills">
            <div className="nav-item">Skills</div>
          </Link>
          <Link href="/#services">
            <div className="nav-item">Services</div>
          </Link>
          <Link href="/#contact">
            <div className="nav-item">Contact</div>
          </Link>
        </nav>
      </header>
    )
}

export default Header;