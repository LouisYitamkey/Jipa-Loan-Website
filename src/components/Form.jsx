import React from "react";
import TextField from '@mui/material/TextField';




export default function Form() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone:"",
    message:"",
  });

  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [dataSent, setDataSent] = React.useState(false)

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true); // set formSubmitted state to true on form submission
  
    if (formData.name.trim() && formData.email.trim() && formData.phone.trim() && formData.message.trim()) {
      console.log('datasent')
      // handle form submission if all required fields are filled out
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    
      

      setFormSubmitted(false);

     setTimeout(()=>{
      setDataSent(true)

     },100) 
     setTimeout(()=>{
      setDataSent(false)

     },1700) 
       // reset formSubmitted state to false after successful form submission
    } else {
      console.log('form submission error: required fields missing')
      // handle form submission error if required fields are missing
    }
  };
  

  return (
    <form className="md:mx-5 md:w-80 md:my-4">
      <div className="md:w-full">
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          size="small"
          className="mt-4 md:mt-0 w-[300px] md:w-[300px]"
          required
          error={formSubmitted && !formData.name.trim()}
          helperText={formSubmitted && !formData.name.trim() ? "Name is required" : null}
        />
      </div>
      <br/>

      <div className="">
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          size="small"
          className="w-[300px] md:w-[300px]"
          required
          error={formSubmitted && !formData.email.trim()}
          helperText={formSubmitted && !formData.email.trim() ? "Email is required" : null}
        />
      </div>
      <br/>

      <div className="">
        <TextField
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          size="small"
          className="w-[300px] md:w-[300px]"
          type="number"
          required
          inputProps={{ inputMode: "numeric" }}
          error={formSubmitted && !formData.phone.trim()}
          helperText={formSubmitted && !formData.phone.trim() ? "Phone is required" : null}
        />
      </div>
      <br/>
      
      <div className="">
        <TextField
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-[300px] md:w-[300px]"
          size="small"
          multiline
          required
          rows={4}
          error={formSubmitted && !formData.message.trim()}
          helperText={formSubmitted && !formData.message.trim() ? "Message is required" : null}
        />
      </div>
    <div className="flex place-content-center pt-8  md:pt-8">
      <input onClick={handleFormSubmit}  className="px-8 text-blue-500 rounded-md py-2 border-2 border-ash" type="submit" value={'Submit'} />

 
    </div>
    <div className=" md:pt-5 pt-5 flex justify-center items-center ">
      { dataSent &&  <span className="text-xs bg-slate-200 rounded-sm px-2 py-1 text-green-900 font-medium"> Submitted Successfully</span>

      }
    
      
    </div>
    
    </form>
  );
}
