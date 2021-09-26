import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../actions/auth";
import { useDispatch } from "react-redux";
import { LOGIN_USER } from "./../constants/authConstants";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        email,
        password,
      });
      localStorage.setItem("auth", JSON.stringify(data));
      dispatch({ type: LOGIN_USER, payload: data });

      toast.success("Login Successful");
      history.push("/");
    } catch (error) {
      if (error.response.status === 400) toast.error(error.response.data);
    }
  };

  return (
    <>
      <div className='container-fluid bg-secondary p-5 text-center'>
        <h1>Login</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <form onSubmit={handleSubmit} className='mt-3'>
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

              <button
                disabled={!email || !password}
                className='btn btn-primary'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
