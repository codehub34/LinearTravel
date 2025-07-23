import React from "react";

const LinearTravelsForm = () => {

  // https://script.google.com/macros/s/AKfycbzOhSXSgpB90yLG9a0xXyBV5PvUIN7Ch1lv_QVw25RVGNXy2Zy_OC0B2vibN2db5Tk/exec
 // https://script.google.com/macros/s/AKfycby_Bk42ONtEQKVbPM8eDk91a_nVsrZr5eZK4GnRBARTJ_AZ-4CM_N_SZtVL4mojuuAi/exec
 //https://script.google.com/macros/s/AKfycby_Bk42ONtEQKVbPM8eDk91a_nVsrZr5eZK4GnRBARTJ_AZ-4CM_N_SZtVL4mojuuAi/exec
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    const url = "https://script.google.com/macros/s/AKfycby_Bk42ONtEQKVbPM8eDk91a_nVsrZr5eZK4GnRBARTJ_AZ-4CM_N_SZtVL4mojuuAi/exec"
    fetch(url,{
      method:"POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:(`Name=${e.target.name.value}&Email=${e.target.email.value}&Phone=${e.target.phone.value}`)
    }).then(res=>res.text()).then(data=>{
      alert(data)
    }).catch(error=>console.log(error))
  }


  return (
    <div>
        <h1>React to Sheet</h1>
        <form onSubmit={handleSubmit}>
          <input name='name' placeholder='Name 1' /> <br/>
          <input name='email' placeholder='Email 1' /> <br/>
          <input name="phone" placeholder="Phone" />
          <button>Add</button>
        </form>
    </div>
  )
};

export default LinearTravelsForm;