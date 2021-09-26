import { useState } from "react";
import { toast } from "react-toastify";
import { register } from "./../actions/auth";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register({
        name,
        email,
        password,
      });
      toast.success("Register SuccessFully. Please Login");
      history.push("/login");
    } catch (error) {
      if (error.response.status === 400) toast.error(error.response.data);
    }
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit} className='mt-3'>
      <div className='form-group mb-3'>
        <label className='form-label'>Your name</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className='form-group mb-3'>
        <label className='form-label'>Email address</label>
        <input
          type='email'
          className='form-control'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='form-group mb-3'>
        <label className='form-label'>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className='btn btn-primary'>Submit</button>
    </form>
  );

  return (
    <>
      <div className='container-fluid bg-secondary p-5 text-center'>
        <h1>Register</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>{registerForm()}</div>
        </div>
      </div>
    </>
  );
};

export default Register;
