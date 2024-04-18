import React, { useState } from 'react';
import axios from 'axios';

const RazorpayForm = () => {
  const [amount, setAmount] = useState(500);
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
      const response = await axios.post('http://localhost:3001/payment/createorder', { amount, currency: 'INR' });
      const { orderId } = response.data;
      setOrderId(orderId);

      const options = {
        key: process.env.RAZORPAY_KEY,
        amount: amount * 100,
        currency: 'INR',
        name: 'DevShop',
        description: 'Payment for Your Product',
        order_id: orderId,
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
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
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 border border-gray-300 rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Make a Payment</h2>
      <div className="mb-3">
        <label htmlFor="amount" className="block mb-1">Amount (INR)</label>
        
      </div>
      <button className={"w-full  bg-blue-500 text-black py-2 shadow-2xl rounded-3xl"} onClick={createOrder}>
        Pay Now
      </button>
    </div>
  );
};

export default RazorpayForm;
