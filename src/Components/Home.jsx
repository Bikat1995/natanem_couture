import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <div className="top-bar">
        <h1 className="header">Natanem Couture</h1>
        <label className="menu-toggle-label">
          <input type="checkbox" className="menu-toggle-input" />
          <span className="menu-toggle">☰</span>
        </label>
        <div className="menu">
          <Link to="/" >
            <button className='but'>Home</button>
          </Link>
          <a href="#About" >
            <button className='but'>About</button>
          </a>
          <a href="#Contact" >
            <button className='but'>Contact</button>
          </a>
        </div>
      </div>
    <div className="home">
        <p className="para">
          Home of elegance and style,<br /> The first haute couture <br /> hat makers in Ethiopia.
        </p>
      <div className="content">
        <div className='img-override'>
            <img src="collecC.jpg" alt="Third Collection" className='override' />
            <img src="collecA.jpg" alt="collection" className='background-img'/>
            <img src="collecB.jpg" alt="Another collection" className='overriden'/>
        </div>
        <Link to="/Dashboard" className="clickable">Discover</Link>
      </div>
    </div>
    </>
  );
}


export default Home
