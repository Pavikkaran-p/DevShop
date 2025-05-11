import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/auth/register', { name, email, password })
      .then((result) => {
        if (result.data === 'Already registered') {
          toast.warning('E-mail already registered! Redirecting to login...');
          setTimeout(() => navigate('/login'), 2000);
        } else {
          toast.success('Registered successfully!');
          setTimeout(() => navigate('/login'), 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong. Try again later.');
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center text-center vh-100"
      
    >
      <div className="bg-white p-4 rounded shadow-lg" style={{ width: '100%', maxWidth: '420px' }}>
        <h2 className="mb-4 text-primary">Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-control rounded"
              id="name"
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control rounded"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="mb-4 text-start">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="form-control rounded"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button type="submit" className="bg-blue-900 btn btn-primary w-100 mb-3">
            Register
          </button>
        </form>

        <p className="text-muted">
          Already have an account?{' '}
          <Link to="/login" className="text-decoration-none text-primary">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
