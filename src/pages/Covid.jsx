import React,{useRef, useState} from 'react'
import '../styles/main.css'
import { AiOutlineInfoCircle } from "react-icons/ai";
import imag from '../assets/covid-banner.png'
import mask1 from '../assets/Images-for-Website_N95-Mask.jpg'
import mask2 from '../assets/Images-for-Website_Venus-Mask.jpg'
import mask3 from '../assets/Images-for-Website_Industrial-Grade-Thermometer.jpg'
import mask4 from '../assets/Images-for-Website_Face-sheld_Pro.jpg'
import mask5 from '../assets/Images-for-Website_UK-Grade-Thermometer.jpg'
import mask6 from '../assets/Images-for-Website_Face-Shield_Standard.jpg'
import mask7 from '../assets/Images-for-Website_Face-Shield_Re-use.jpg'
import mask8 from '../assets/Images-for-Website_Safety-Goggle.jpg'
import mask9 from '../assets/Images-for-Website_Disinfection-Tunnel.jpg'
import mask10 from '../assets/Images-for-Website_Mist-Based-Sanitizer.jpg'
import mask11 from '../assets/Images-for-Website_Aerosol-Box.jpg'
import {contents} from './content'
import Products from '../components/Products';
import emailjs from "@emailjs/browser";



export default function Covid() {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    product: "",
    Quantity:"",
    contact:"",
    resumeL:"",
  });

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
          to_email: "rahulchauhah50@gmail.com",
          message: `Contact:${form.contact}
          Product:${form.product}
          Quantity:${form.Quantity}`,
        },
        "ELoyUYRSJDVO9FEkd"
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  const images = [mask1,mask2,mask3,mask4,mask5,mask6,mask7,mask8,mask9,mask10,mask11]
  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
        <div style={{height:"200px"}} className='gradi' ></div>


        <div className='d-flex flex-md-row flex-column mx-auto my-4' style={{width:"80vw"}} >
          <div>
          <div className='px-4 mx-4 bg-light' style={{borderLeft:"5px solid #F304AD"}} >
            <div className='d-flex flex-row align-item-center'>
              <AiOutlineInfoCircle  size={35} color='#FC01AC' />
              <p className='mx-2 h3 w-100' style={{fontWeight:"700",color:"#535353",overflowY:"hidden"}} >COVID-19 <span style={{color:"#2ABDE9"}} >BUSINESS ESSENTIALS</span> </p>
            </div>
            <div className='text-start'>
              <div className='h3 text-muted my-4'  style={{fontWeight:"1", height:"78px",overflowY: "hidden"}} >Within just a few weeks, business operations have changed immensely.</div>
              <p className='h6 text-muted' style={{fontWeight:"1",overflowY: "hidden"}} >Due to coronavirus, it is very important to Stay Safe & Keep others Safe. Coveralls Face Shields For safety and continuity, it is important to use Protective Gear especially in places like factories, shops, public transport, hospitals, all public places, parks etc.</p>
              <p className='h6 text-muted my-4' style={{fontWeight:"700",overflowY: "hidden"}}>To Help you Stay Safe anywhere we are introducing our new lines of products-</p>
            </div>
            <div className='d-flex flex-row justify-content-around'>
              <div className='mb-4'>
                <img className='w-100' alt='' src={imag} />
              </div>
            </div>
          </div>
          </div>
          <div className='w-100 p-4 text-start'>
          <form  ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group my-4">
              <input  name='name'  value={form.name}  onChange={handleChange} style={{backgroundColor:"transparent",borderWidth:"0px 0px 1px 0px",borderColor:"black"}} type="text" className="form-control" id="exampleFormControlInput1" placeholder="FULL NAME"/>
            </div>
            <div className="form-group my-4">
              <input  name='email' value={form.email} onChange={handleChange} style={{backgroundColor:"transparent",borderWidth:"0px 0px 1px 0px",borderColor:"black"}} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Business Email"/>
            </div>
            <div className="form-group my-4">
              <input name='contact' value={form.contact} onChange={handleChange} style={{backgroundColor:"transparent",borderWidth:"0px 0px 1px 0px",borderColor:"black"}} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Contact No"/>
            </div>
            <div className="form-group my-4 text-start">
            <label className='my-2'>Select Product</label>
              <select name='product' value={form.product}  onChange={handleChange} className="form-control" style={{backgroundColor:"transparent",borderWidth:"0px 0px 1px 0px",borderColor:"black",outline:"none"}}>
                <option>MASK | 3M N95</option>
                <option>VENUS MASK</option>
                <option>INDUSTRIAL GRADE THERMOMETER</option>
                <option>FACE SHEILD | PRO SHEILD</option>
                <option>GOOGLE</option>
              </select>
            </div>
            <div className="form-group my-4">
              <input name='Quantity' value={form.Quantity}  onChange={handleChange} style={{backgroundColor:"transparent",borderWidth:"0px 0px 1px 0px",borderColor:"black"}} type="number" className="form-control" id="exampleFormControlInput1" placeholder="QYT"/>
            </div>
            <div className='text-start my-4'>
              <button type="button" onClick={handleSubmit} className="btn text-white" style={{backgroundColor:"#E90AAF"}} >Send Message</button>
            </div>
        </form>

          </div>

        </div>

      {
        contents?.map((e,i)=>{
          return  <Products key={i} data={e} index={i} logo={images[i]} />
        })
      }

     
    </div>
  )
}







