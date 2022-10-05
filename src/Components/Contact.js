import React, { useState } from 'react'

function Contact() {

  const [data, setData] = useState({ name: '', email: '',number:"",msg:"" })
  const submitHandler = (e) => {
    // console.log(data)
    console.log(data.name);
    alert(`Thank You ${data.name}.... We will response you in a while (^_^)`)
  }

  return (
    <section className="contact my-5" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
            <h4 className="text-center mb-5" >GET IN TOUCH</h4>
            <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" placeholder='Enter Name' required
                  name='name' value={data.name} onChange={e => setData({ ...data, name: e.target.value })}/>
              </div>
              <div className="form-group">
                <input type="email" placeholder='Enter Email' required
                  name='email' value={data.email} onChange={e => setData({ ...data, email: e.target.value })}/>
              </div>
              <div className="form-group">
                <input type="number" placeholder='Enter Number' required
                  name='number' value={data.number} onChange={e => setData({ ...data, number: e.target.value })}/>
              </div>
              <div className="form-group">
                <input type="text" className='msg_input' placeholder='Enter Message' required
                  name='msg' value={data.msg} onChange={e => setData({ ...data, msg: e.target.value })}/>
              </div>
              <button type="submit" className="sent-btn">Sent Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact