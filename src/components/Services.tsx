import Card from '../components/Card';
import ServicesData from '../components/ServicesData';
import '../components/Services.css'

const Services = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <h2 className="text-center" style={{ color: '#D9B471' }}>Our Services</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="row" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              {Array.isArray(ServicesData) && ServicesData.map((val: any, ind: any) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} Link={val.Link} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;
