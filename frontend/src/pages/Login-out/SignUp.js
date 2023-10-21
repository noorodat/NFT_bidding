import React, { useState } from "react";
import axios from "../../components/axios";
import { Form, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';

import { connect } from 'react-redux';
import { addUser } from '../../redux/actions/userActions';

// sara

const SignUp = () => {
  document.title = "Sign Up";

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [password_confirmation, setpasswordConfirmation] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    image: '',
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // You need to define the `handleLogin` function
  const handleRegister = async (e) => {
    e.preventDefault(); // Use e.preventDefault() to prevent form submission
    addUser(user);
    setUser({
      name: '',
      phone: '',
      email: '',
      password: '',
      image: '',
    });

    try {
      const csrfResponse = await axios.get("/get-csrf-token");
      const csrfToken = csrfResponse.data.csrf_token;
      console.log(name);
      console.log(csrfToken);
      console.log(csrfResponse );

      axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
      const response = await axios.post("/register", {
        name,
        email,
        password,
        password_confirmation,
      });
      setemail("");
      setpassword("");
      setname("");
      setpasswordConfirmation("");
      console.log("YESYESYESYES");
      console.log(response.data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            {/* <!-- start page title area --> */}
            <div className="rn-breadcrumb-inner ptb--30">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-12">
                    <h5 className="title text-center text-md-start">Sign Up</h5>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <ul className="breadcrumb-list">
                      <li className="item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="separator">
                        <i className="feather-chevron-right"></i>
                      </li>
                      <li className="item current">Sign Up</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title area --> */}

            {/* <!-- login form --> */}
            <div className="login-area rn-section-gapTop">
              <div className="container">
                <div className="row g-5">
                  <div className="offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12">
                    <div className="form-wrapper-one registration-area">
                      <h4>Sign up</h4>
                      <Form onSubmit={handleRegister} className="auth-form">
                        <div className="mb-5">
                          <label htmlFor="firstName" className="form-label">
                            First name
                          </label>
                          <Form.Control
                           type="text"
                           value={name}
                           id="firstName"
                          // onChange={(e) =>setname(e.target.value)}
                          onChange={handleChange}
                          required />
                        </div>
                        {/* <div className="mb-5">
                          <label htmlFor="lastName" className="form-label">
                            Last name
                          </label>
                          <Form.Control type="text" id="lastName" />
                        </div> */}
                        <div className="mb-5">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Email address
                          </label>
                          <Form.Control
                            type="email"
                            value={email}
                            className="form-control"
                            id="usernameInput"
                            placeholder="Enter your username"
                            // onChange={(e) => setemail(e.target.value)}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <label htmlFor="passwordInput" className="form-label">
                            Password
                          </label>
                          <Form.Control
                            type="password"
                            className="form-control"
                            id="passInput"
                            placeholder="Enter your password"
                            value={password}
                            // onChange={(e) => setpassword(e.target.value)}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-5">
                          <label htmlFor="emailInput" className="form-label">
                            Confirm Password
                          </label>
                          <Form.Control
                            type="password"
                            value={password_confirmation}
                            className="form-control"
                            id="passwordInput"
                            placeholder="Enter your password"
                            // onChange={(e) =>
                            //   setpasswordConfirmation(e.target.value)
                            // }
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-5 rn-check-box">
                          <Form.Control
                            type="checkbox"
                            className="rn-check-box-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="rn-check-box-label"
                            htmlFor="exampleCheck1"
                          >
                            Allow all terms & conditions
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary mr--15"
                        >
                          Sign Up
                        </button>
                        <Link to ="/Login" className="btn btn-primary-alta">
                          Log In
                        </Link>
                      </Form>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="social-share-media form-wrapper-one">
                      <h6>Another way to sign up</h6>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit, amet sectetur adipisicing
                        elit.cumque.
                      </p>
                      <button className="another-login login-facebook">
                        <img
                          className="small-image"
                          src="assets/images/icons/google.png"
                          alt=""
                        />
                        <span>Log in with Google</span>
                      </button>
                      <button className="another-login login-facebook">
                        <img
                          className="small-image"
                          src="assets/images/icons/facebook.png"
                          alt=""
                        />
                        <span>Log in with Facebook</span>
                      </button>
                      <button className="another-login login-twitter">
                        <img
                          className="small-image"
                          src="assets/images/icons/tweeter.png"
                          alt=""
                        />
                        <span>Log in with Twitter</span>
                      </button>
                      <button className="another-login login-linkedin">
                        <img
                          className="small-image"
                          src="assets/images/icons/linkedin.png"
                          alt=""
                        />
                        <span>Log in with LinkedIn</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- login form end --> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};


export default connect(null, { addUser })(SignUp);
