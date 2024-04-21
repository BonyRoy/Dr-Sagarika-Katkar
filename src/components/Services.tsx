import Card from '../components/Card';
import ServicesData from '../components/ServicesData';
import '../components/Services.css'

const Services = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <br />
        <h2 className="text-center" style={{ color: '#D9B471' }}>Our Services</h2>
      </div>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              {Array.isArray(ServicesData) && ServicesData.map((val: any, ind: any) => (
                <div key={ind} className="col-md-6 col-lg-4 mb-4">
                  <Card imgsrc={val.imgsrc} title={val.title} text={val.text} Link={val.Link} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
