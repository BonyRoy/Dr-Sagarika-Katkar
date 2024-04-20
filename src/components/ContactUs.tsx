import React from 'react';

const ContactUs = () => {
  const handlePhoneNumberClick = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Appointment Booking Request");
    const message = encodeURIComponent("I would like to book an appointment for [insert your date here].");
    window.open(`mailto:drsagarikakatkar@gmail.com?subject=${subject}&body=${message}`, '_blank');
  };

  const handleLocationClick = () => {
    // Redirect to the specified location
    window.location.href = "https://www.google.com/maps/dir//Shop+no+-+13,+Dr.+Sagarika's+Multispeciality+Dental+Clinic,+Bhoomi+Acres+-+Phase+2,+Park+Ave,+near+Waghbil,+Hiranandani+Estate,+Thane+West,+Thane,+Maharashtra+400615/@19.2608596,72.9786634,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7bb874dde5bff:0x4db9b48cf093e47e!2m2!1d72.9786634!2d19.2608596?entry=ttu";
  };
  
  return (
    <div className="card" style={{ maxWidth: '1500px', margin: '20px auto', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
      <div className="card-body" style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '20px', color: '#333' }}>Contact <span style={{ color: '#D9B471' }}>Us</span></h3>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '10px' }}>
          <i className="fas fa-map-marker-alt" style={{ marginRight: '5px', color: '#D9B471' }}></i>
          <strong>Location:</strong><br />
          <span style={{ cursor: 'pointer', color: '#3C7373', fontWeight:'bold'}} onClick={handleLocationClick}>
            Shop no - 13, Bhoomi Acres - Phase 2, Park Ave, near Waghbil, Hiranandani Estate, Thane West, Thane, Maharashtra - 400615
          </span>
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '10px' }}>
          <i className="fas fa-phone-alt" style={{ marginRight: '5px', color: '#D9B471' }}></i>
          <strong>Phone:</strong><br />
          <span style={{ cursor: 'pointer', color: '#3C7373', fontWeight:'bold'}} onClick={() => handlePhoneNumberClick('+91 099206 78467')}>
            +91 099206 78467
          </span><br />
          <span style={{ cursor: 'pointer', color: '#3C7373' , fontWeight:'bold'}} onClick={() => handlePhoneNumberClick('+91 090828 90055')}> 
            +91 090828 90055
          </span>
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '10px' }}>
          <i className="fas fa-envelope" style={{ marginRight: '5px', color: '#D9B471' }}></i>
          <strong>Email:</strong><br />
          <span style={{ cursor: 'pointer', color: '#3C7373' , fontWeight:'bold'}} onClick={handleEmailClick}>
            drsagarikakatkar@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
