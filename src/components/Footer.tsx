import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+9109920678467', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/dr.sagarikasdentalclinic?igshid=cWs4MGs4bGN1dGNm', '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Contact Inquiry");
    const message = encodeURIComponent("Hello, I have an inquiry.");
    window.open(`mailto:drsagarikakatkar@gmail.com?subject=${subject}&body=${message}`, '_blank');
  };

  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
      <div>
        <span style={{ marginRight: '20px', cursor: 'pointer' }} onClick={handleWhatsAppClick}>
          <i className="fab fa-whatsapp" style={{ fontSize: '24px' }}></i>
        </span>
        <span style={{ marginRight: '20px', cursor: 'pointer' }} onClick={handleInstagramClick}>
          <i className="fab fa-instagram" style={{ fontSize: '24px' }}></i>
        </span>
        <span style={{ cursor: 'pointer' }} onClick={handleEmailClick}>
          <i className="fas fa-envelope" style={{ fontSize: '24px' }}></i>
        </span>
      </div>
      <div style={{ marginTop: '10px' }}>
        <p style={{ margin: 0, fontSize: '14px' }}>Connect with us</p>
        <br/>
        <p style={{ margin: 0, fontSize: '14px', color: 'white' }}>© 2024 Dr. Sagarika Katkar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
