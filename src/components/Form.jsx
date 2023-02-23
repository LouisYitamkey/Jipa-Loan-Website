import React from "react";
import TextField from '@mui/material/TextField';





export default function Form() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone:"",
  
    message:"",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  console.log(formData);

  return (
    <form className="   md:mx-5  md:w-80 md:my-4">
        <div className=" md:w-full">
        <TextField
        name="name"
        label="Name"
        value={formData.firstName}
        onChange={handleChange}
        size="small"
        className=" w-[300px] md:w-[300px]"
        required
       
      /> </div>
    <br/>

      <div className="">
      <TextField
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        size="small"
        className="  w-[300px] md:w-[300px]"
        
       
      />


      </div> <br/>
      <div className="">
      <TextField
        name="phone"
        label="Phone"
        value={formData.phone}
        onChange={handleChange}
        size="small"
        className="  w-[300px] md:w-[300px]"
        type="number"
        
        inputProps={{ inputMode: "numeric" }}
      />


      </div> <br/>
      
      <div className="">
    <TextField
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        className="  w-[300px] md:w-[300px]"
        size="small"
        multiline

        rows={4} 
      />
    </div>
    
    </form>
  );
}
