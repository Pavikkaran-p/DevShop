import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const RazorpayForm = (props) => {
  const navigate=useNavigate();
  const {amount}=props;
  console.log(amount)
  const [orderId, setOrderId] = useState('');
  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}


const createOrder = async () => {
  try {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
        
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
      const response = await axios.post(`/api/payment/createorder`, { amount, currency: 'INR' });
      console.log(response)
      const { orderId } = response.data;
      console.log(orderId)
      setOrderId(orderId);

      const options = {
        key: process.env.RAZORPAY_KEY || 'jndjwndjn',
        amount: amount * 100,
        currency: 'INR',
        name: 'DevShop',
        description: 'Payment for Your Product',
        order_id: orderId,
        handler: function (response) {
          console.log(response.razorpay_payment_id);
          navigate("/sucess");
        },
        prefill: {
          name: 'New user',
          email: 'your_email@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Your Address',
        },
        theme: {
          color: '#F37254',
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      console.error(err);
      navigate("/failure")
    }
  };

  return (
    <>
    <div className="max-w-md mx-5 my-10 p-5 border border-gray-300 rounded-3">
      <h2 className="text-lg font-semibold mb-3">Payment Details</h2>
      <div className="mb-3">
        <h3 className="block mb-1 p-2">Amount : Rs.{amount}</h3>
        <h3 className="block mb-1 p-2">Tax : 18% (included)</h3>
        
      </div>
      <button className={"w-full  bg-blue-500 text-black py-2 shadow-2xl rounded-3xl"} onClick={createOrder}>
        Pay Now
      </button>

    </div>
    </>
  );
};

export default RazorpayForm;
