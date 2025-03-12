import React, { useState } from 'react';  

const FeedbackForm = () => {  
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');  
  const [phone, setPhone] = useState('');  
  const [feedback, setFeedback] = useState('');  
  const [errorMessage, setErrorMessage] = useState('');  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    setErrorMessage('');  

    // Basic validation  
    if (!name || !email || !phone || !feedback) {  
      setErrorMessage('All fields are required!');  
      return;  
    }  
 
    console.log("Feedback submitted:", { name, email, phone, feedback });  

    setName('');  
    setEmail('');  
    setPhone('');  
    setFeedback('');  
    alert('Thank you for your feedback!');  
  };  

  return (  
    <section className="py-10 px-4 sm:px-0" id="contact">   
    <div className="title m-2 pb-5 flex items-center justify-center">
    <div className="red-line w-[70px] h-[7px] bg-red-600 mt-2">

    </div>
    <h2 className='font-bold text-3xl mx-3'>Contact Us </h2>
    <div className="red-line w-[70px] h-[7px] bg-red-600 mt-2">

    </div>

  </div> 
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto bg-white p-6 rounded shadow-xl">  
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}  
        <div className="flex flex-col md:flex-row gap-6">  
          {/* Left Side - Name, Email, and Phone */}  
          <div className="flex-1">  
            <div className="mb-4">  
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>  
              <input   
                type="text"   
                id="name"  
                value={name}   
                onChange={(e) => setName(e.target.value)}   
                className="w-full p-2 border rounded"  
                required   
              />  
            </div>  
            <div className="mb-4">  
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>  
              <input   
                type="email"   
                id="email"  
                value={email}   
                onChange={(e) => setEmail(e.target.value)}   
                className="w-full p-2 border rounded"  
                required   
              />  
            </div>  
            <div className="mb-4">  
              <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>  
              <input   
                type="tel"   
                id="phone"  
                value={phone}   
                onChange={(e) => setPhone(e.target.value)}   
                className="w-full p-2 border rounded"  
                required   
              />  
            </div>  
          </div>  
  
          <div className="flex-1">  
            <div className="mb-4">  
              <label className="block text-gray-700 mb-2" htmlFor="feedback">Feedback</label>  
              <textarea   
                id="feedback"  
                value={feedback}   
                onChange={(e) => setFeedback(e.target.value)}   
                className="w-full p-2 border rounded"  
                rows="8"  
                required   
              />  
            </div>  
            <button type="submit" className="w-full bg-red-600 hover:bg-red-800 text-white p-2 rounded transition-colors">  
              Submit Feedback  
            </button>  
          </div>  
        </div>  
      </form>  
    </section>  
  );  
};  

export default FeedbackForm;  