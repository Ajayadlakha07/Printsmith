import React,{useRef, useState,useEffect} from 'react'
import emailjs from "@emailjs/browser";
import line3 from '../assets/line3.svg'
import '../styles/main.css'
import { AiOutlineCaretRight } from "react-icons/ai";
import map1 from '../assets/Screenshot.png'
import map2 from '../assets/Screenshot1.png'

export default function Contactus() {
  
  const [formattedDate,setformattedDate]= useState(null)
  useEffect(()=>{
      const currentDate = new Date();
      const format = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
      setformattedDate(format)
  }, [])
  const divRef = useRef(null);
  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: 'smooth' });
  },[]);

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
        to_name: "pritsmith",
        from_email: form.email,
        to_email: "web.developer@infinityadvt.com",
        message: `Contact:${form.mobile}
        City:${form.city}
        Organisation:${form.currentOrgnisation},
        E-mail:${form.email},
        Exprerience:${form.exprerience},`
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
      <div ref={divRef} ></div>
      <div  style={{height:"200px",alignItems:"end",paddingTop:"100px"}} className='gradi text-start px-4' >
        <div className='text-start text-white px-2 py-1' style={{backgroundColor:"rgba(0, 0, 0, .8)",width:"200px"}}>
          <span  >Home</span>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>CONTACT US</span>
        </div>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"150px",fontSize:"11px"}}>{formattedDate}</div>

       </div>
        <div className="svgdiv">
          <img alt='' className='svgimg' src={line3} />
          <i className="glyphicon glyphicon-chevron-down"></i>
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
       

    </div>
            </div>

            {/* <div id="map" style={{ height: '800px' }}></div> */}

            <div className='my-4 cursor-pointer'>
              <p className='h3' style={{color:"#00BCD4"}}>Production Unit</p>
              <a href='https://maps.app.goo.gl/Y3dAsVQHz7PBqs1o8' target='blank'>
              <img alt='' className='my-4 w-100' src={map1} />
              </a>
              <p className='h3 ' style={{color:"#00BCD4"}}>Marketing Office</p>
              <a href='https://maps.app.goo.gl/HAQW5816cWQTeNTR8' target='blank'>
              <img alt='' className='w-100' src={map2}  />
              </a>
            </div>

        </div>
    </div>
  )
}

