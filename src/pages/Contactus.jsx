import React,{useRef, useState} from 'react'
import emailjs from "@emailjs/browser";
import map1 from '../assets/Screenshot.png'
import map2 from '../assets/Screenshot1.png'
import line3 from '../assets/line3.svg'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';



export default function Contactus() {

    // const containerStyle = {
    //     width: '400px',
    //     height: '400px'
    //   };
    //   const center = {
    //     lat: -34.397,
    //     lng: 150.644
    //   };

    const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile:"",
    city:"",
    currentOrgnisation:"",
    exprerience:"",
    resume:""
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      resume: file,
    }));
    console.log(form)
  };
  

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    
    setForm({
      ...form,
      [name]: value,
    });
    
    console.log(form)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cc2612m",
        "template_7s2vfgt",
        {
          from_name: form.name,
          to_name: "Rahul chauhan",
          from_email: form.email,
          to_email: "web.developer@infinityadvt.com",
          message: `Contact:${form.mobile}
          City:${form.city}
          Organisation:${form.currentOrgnisation},
          Exprerience:${form.exprerience},
          Resume:${form.resume}`,
        },
        "ELoyUYRSJDVO9FEkd"
      )
      .then(
        () => {
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message:"",
            city:"",
            currentOrgnisation:"",
            exprerience:"",
            resume:""
          });
        },
        (error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
        <div style={{height:"200px"}} className='gradi' ></div>
        <div class="svgdiv">
          <img alt='' className='svgimg' src={line3} />
          <i class="glyphicon glyphicon-chevron-down"></i>
          </div>
        <div className='row mdWidth75 mx-auto p-4 text-start' >
            <div className='col-md-2 col-12 h1' style={{paddingLeft:"0px",borderRight:"5px solid pink"}} >
            <p style={{color:"#C2C2C2"}}>Business Enquiry </p><p className='my-4' style={{color:"#F007AF"}} >HR</p> 
            <p style={{color:"#C2C2C2"}}>Become a Vendor</p>
            </div>
            <div className='col-md-10 col-12 p-4' style={{borderLeft:"1px solid #C2C2C2"}} >
            <div className="container-fluid px-1 mx-auto">
    <div className="row d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center w-100">
                <h3 className='blue-text text-start' >Drop us a line!</h3>
                <p className="blue-text text-start">We much value the opportunity</p>
                <div className="">
                    
                    <form onSubmit={handleSubmit} ref={formRef} className="form-card" style={{backgroundColor:"#F5F5F5"}} >
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex"> 
                            <label className="form-control-label py-2 text-start">Name<span className="text-danger"> *</span></label> 
                            <input value={form.name}  onChange={handleChange} style={{backgroundColor:"#F5F5F5"}} type="text" id="fname" name="name"/> 
                        </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> 
                                <label className="form-control-label py-2 text-start">Email<span className="text-danger"> *</span></label> 
                                <input  name='email' value={form.email} onChange={handleChange} style={{backgroundColor:"#F5F5F5"}} type="text" id="email" /> 
                        </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label py-2 text-start">Mobile<span className="text-danger"> *</span></label>
                                <input name='mobile' value={form.mobile} onChange={handleChange} style={{backgroundColor:"#F5F5F5"}} type="text" id="mob"  /> 
                            </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> 
                                <label className="form-control-label py-2 text-start">City<span className="text-danger"> *</span></label>
                                <input name='city' value={form.city} onChange={handleChange} style={{backgroundColor:"#F5F5F5"}} type="text" id="lname" /> 
                            </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label py-2 text-start">Current Organisation<span className="text-danger"> *</span></label>
                                <input name='currentOrgnisation' value={form.currentOrgnisation} onChange={handleChange} style={{backgroundColor:"#F5F5F5"}} type="text" id="mob" /> 
                            </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> 
                                <label className="form-control-label py-2 text-start">Experiance (in years)<span className="text-danger"> *</span></label>
                                <input name='exprerience' value={form.exprerience} onChange={handleChange} style={{backgroundColor:"#F5F5F5"}} type="number" id="lname"/> 
                            </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-6 flex-column d-flex"> 
                            <label className="form-control-label py-2 text-start">Upload resume<span className="text-danger"> *</span></label> 
                            <input onChange={handleFileChange} name='resume'  type="file" id="ans" placeholder=""/> 
                        </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="justify-content-end d-flex form-group col-sm-6"> 
                            <button type="submit" className="btn-block btn-primary">Send</button> 
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
        
            </GoogleMap>
        </LoadScript> */}

    </div>
            </div>

            <div className='my-4'>
              <p className='h3 ' style={{color:"#00BCD4"}}>Production Unit</p>
              <img alt='' className='my-4 w-100' src={map1} />
              <p className='h3 ' style={{color:"#00BCD4"}}>Marketing Office</p>
              <img alt='' className='w-100' src={map2}  />
            </div>

        </div>
    </div>
  )
}

