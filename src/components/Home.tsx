import Services from '../components/Services';
import Logo from '../Images/logo.jpeg';
import dance from '../Images/dance.jpeg';
import '../Home.css';
import ContactUs from '../components/ContactUs'
import Footer from './Footer';
import Carousel from './Carousel';

const Home = () => {
  return (
    <>
    <div style={{backgroundColor:'white'}}>
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
      {/* Header */}
      <div style={{ padding: '2%', backgroundColor: '#CEE8F2', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2%', flexDirection: 'row', width: '100%' }} className='Header'>
        <img style={{ width: '20%', maxWidth: '200px', height: 'auto', borderRadius: '50%' }} src={Logo} alt="Logo" />
        <h1><span style={{ color: '#D9B471' }}>Dr </span><span style={{ color: '#3C7373' }}>Sagarika</span></h1>
      </div>
      {/* NavLinks */}
      <div style={{ backgroundColor: '#F2F2F2', display: 'flex', flexDirection: 'row', gap: '5%', padding: '2%', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <a style={{color: '#3C7373' }} href="#header"><h5>HA..</h5></a>
        <a style={{color: '#3C7373' }} href="#services"><h5>Services</h5></a>
        <a style={{color: '#3C7373' }} href="#Testimonials"><h5>Testimonials</h5></a>
        <a style={{color: '#3C7373' }} href="#contact"><h5>Contact Us</h5></a>
      </div>
      {/* Body-1 */}
      <div id='header' className="d-flex align-items-center" style={{ marginTop: '2%', width: '100%', flex: '1' }}>
        <div className="container-fluid nav-bg" style={{ width: '100%' }}>
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="row">
                {/* Column 1: Heading and Button */}
                <div className="col-lg-6 d-flex flex-column justify-content-center" style={{ paddingRight: '0%', paddingLeft: '6%', textAlign: 'center' }}>
                  <div style={{ marginBottom: '20px' }}>
                    <h2 className="heading">A Dental Clinic That You Can <span style={{ color: '#D9B471', fontWeight: 'bold' }}>Trust</span></h2>
                    <br />
                    <a href="#contact" className="btn" style={{ backgroundColor: '#3C7373', color: 'white', borderRadius: '20px', fontSize: '1.5em' }}>Book Your Appointment</a>
                  </div>
                  <br />
                </div>
                {/* Column 2: Image */}
                <div className="col-lg-6 d-flex justify-content-center align-items-center" style={{ paddingRight: '0%', paddingLeft: '7%', backgroundColor:'white'}}>
                  <div className="header-img" style={{backgroundColor:'white'}}>
                    <img src={dance} className="img-fluid animated" alt="home img" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <br/>
      {/* Body-2 */}
      <div id='body-2' >
        <br/><br/>
        <div style={{ padding: '5%', backgroundColor: '#F2F2F2', width: '100%' }}>
          {/* Welcome Card */}
          <div className="card">
            <div className="card-body">
              <h3>Welcome to Multi-Specialty <span style={{ color: '#D9B471' }}>Dental Clinic</span></h3>
              <h6>Your trusted destination for comprehensive dental care. We are dedicated to providing quality services with a smile.</h6>
              <Carousel/>
              </div>
          </div>
          
        </div>
      </div>
      {/* Services Component */}
      <div id='services' style={{backgroundColor:'white'}}>
        <Services />
      </div>
      {/* Testimonials Card */}
      <div id='Testimonials'>
      <div style={{ padding: '5%', backgroundColor: '#F2F2F2', width: '100%' }}>
        <div className="card">
          <div className="card-body" style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <h3 style={{ textAlign: 'center' }}>Our <span style={{ color: '#D9B471' }}>Testimonials</span></h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '24px', color: '#FFD700' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> {/* Five stars icon */}
                  <div style={{ marginLeft: '10px' }}>
                    <p><strong>Sheetal S</strong></p>
                    <p style={{ fontStyle: 'italic' }}>3 months ago</p>
                    <p>Apart from curing my toothache, Dr. Sagarika has helped me overcome the fear of visiting a dentist. Her way of treatment feels a lot safer and pain-free, to be honest.</p>
                  </div>
                </div>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '24px', color: '#FFD700' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> {/* Five stars icon */}
                  <div style={{ marginLeft: '10px' }}>
                    <p><strong>Zeel C</strong></p>
                    <p>Dr. Sagarika is the best. It was my 1st visit, I was quite hesitant, but she was very kind, and her treatment turned out to be excellent. She was asking me in between if I was comfortable or not. Highly recommended. She is very polite and friendly. Don't second guess, she is the best doctor.</p>
                  </div>
                </div>
              </li>
            </ul>
            <a href="https://www.google.com/maps/place/Dr.+Sagarika's+Multispeciality+Dental+Clinic/@19.2608596,72.9786634,15z/data=!4m18!1m9!3m8!1s0x3be7bb874dde5bff:0x4db9b48cf093e47e!2sDr.+Sagarika's+Multispeciality+Dental+Clinic!8m2!3d19.2608596!4d72.9786634!9m1!1b1!16s%2Fg%2F11jydz67dd!3m7!1s0x3be7bb874dde5bff:0x4db9b48cf093e47e!8m2!3d19.2608596!4d72.9786634!9m1!1b1!16s%2Fg%2F11jydz67dd?entry=ttu" style={{padding:'10px', backgroundColor: '#3C7373', color: 'white', borderRadius: '20px'}}>Read More</a>
          </div>
        </div>
      </div>
      </div>
      {/* ContactUs Card */}
      <div id='contact' style={{backgroundColor:'white'}}>
        <ContactUs/>
      </div>
      {/* Footer */}
      <div>
        <Footer/>
      </div>
    </div>
    </>
  );
}

export default Home;

