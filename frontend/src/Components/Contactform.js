import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createEnquiry } from "./../actions/enquiryAction";
import { useAlert } from "react-alert";
import { NEW_ENQUIRY_RESET } from "./../constants/enquiryConstants";


const Contactform = () => {
    const dispatch = useDispatch();
  const alert = useAlert();
  const {error, success } = useSelector((state) => state.newEnquiry);
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      if (success) {
        alert.success("Submitted Successfully");
        dispatch({ type: NEW_ENQUIRY_RESET });
      }
    }, [dispatch, alert, error, success]);
   

      const handleClick = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("mobile", mobile);
    myForm.set("subject", subject);
    myForm.set("message", message);
    dispatch(createEnquiry(myForm));
        
       
     }
    return (
    <>
     
    <div className="card h-100 contactData">
      <div className="card-body">
        <h5 className="card-title text-center">Make an Enquiry</h5>
        <div className='underline mx-auto mb-5' ></div>
        <div className="mb-3">
        <div className='row'>
        <div className='col-md-6'>
  <label htmlFor="name" className="form-label">Name</label>
  <input type="name" className="form-control" id="name" name='name' value={name} onChange = {(e) => setName(e.target.value)}  minLength = {5} required/>
</div>
<div className='col-md-6'>
  <label htmlFor="email" className="form-label">Email address</label>
  <input type="email" className="form-control" id="email" name='email' value={email} onChange = {(e) => setEmail(e.target.value)} aria-describedby="emailHelp"/>
</div>
</div>
</div>

<div className="mb-3">
        <div className='row'>
        <div className='col-md-6'>
  <label htmlFor="mobile" className="form-label">Mobile</label>
  <input type="mobile" className="form-control" id="mobile" name='mobile' value={mobile} onChange = {(e) => setMobile(e.target.value)}  minLength = {10} required/>
</div>
<div className='col-md-6'>
  <label htmlFor="subject" className="form-label">Subject</label>
  <input type="subject" className="form-control" id="subject" name='subject' value={subject} onChange = {(e) => setSubject(e.target.value)}  minLength = {5} required/>
</div>
</div>
</div>
<div className="mb-3">
  <label htmlFor="message" className="form-label">Message</label>
  <textarea className="form-control" id="message" rows="3" name='message' value={message} onChange = {(e) => setMessage(e.target.value)}  minLength = {5} required></textarea>
</div>
        <button type='submit' className="btn" style={{backgroundColor:"#f76c2f",color:"white"}} onClick={handleClick}>Submit</button>
      </div>
    </div>
  


    </>
  )
}

export default Contactform