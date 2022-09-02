import  {useState} from "react";
import EnquiryContext from "./enquiryContext";

const EnquiryState = (props) => {
    const host = "http://localhost:5000";
    const enquiryInitial = [
        
      ]

      const [enquiries, setEnquiry] = useState(enquiryInitial);

       


      //ADD a enquiry
      const addEnquiry = async (name,email,mobile,subject,message) => {

        //API call
        const response = await fetch(`${host}/api/enquiry/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            
          },
        body: JSON.stringify({name,email,mobile,subject,message}) 



        
        });
       
        const enquiry = await response.json(); 
       console.log(enquiry);
        
        setEnquiry(enquiries.concat(enquiry));
      }

      
    return(
    <EnquiryContext.Provider value = {{enquiries, addEnquiry}}>
    {props.children}
    </EnquiryContext.Provider>
    )
}

export default EnquiryState;