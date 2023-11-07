"use client";
import React, { useState } from 'react';
import styles from '../../styles/contactform.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from 'axios';


function ContactForm({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const[_id,set_Id] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/contactus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id, name, email,message}),
    });
    if (response.ok) {
        console.log("added to database");
    }
    else {
        console.log("error");
    }
    // console.log(jobId);
    //console.log(selectedQuestions);
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    // form submission logic, API calls, etc.
    console.log(`client query :_id:${_id},name: ${name}, email: ${email}, message: ${message}`);
    var query = {
      "_id":number,
      "name": name,
      "email": email,
      "msg": message
    }
    try {
      const res = axios.post('http://localhost:3030/v1/contactUs/send-contact', query);
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div className={styles.contactform}>
      <button className={styles.closebutton} onClick={onClose}>
        <FontAwesomeIcon icon="times" />
      </button>
      <form onSubmit={onSubmit}>
        <h2>Contact Us</h2>
        
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
        {success && <div className={styles.successmessage}>Message sent successfully!</div>}
      </form>
    </div>
  );
}

export default ContactForm;