import React from 'react'

export default function Login() {
  return (
    <div>
      <>
  {/* start page title area */}
  <div className="rn-breadcrumb-inner ptb--30">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-12">
          <h5 className="title text-center text-md-start">Nuron Login</h5>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <ul className="breadcrumb-list">
            <li className="item">
              <a href="index.html">Home</a>
            </li>
            <li className="separator">
              <i className="feather-chevron-right" />
            </li>
            <li className="item current">Nuron Login</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* end page title area */}
  {/* login form */}
  <div className="login-area rn-section-gapTop">
    <div className="container">
      <div className="row g-5">
        <div className=" offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12">
          <div className="form-wrapper-one">
            <h4>Login</h4>
            <form>
              <div className="mb-5">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input type="email" id="exampleInputEmail1" />
              </div>
              <div className="mb-5">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input type="password" id="exampleInputPassword1" />
              </div>
              <div className="mb-5 rn-check-box">
                <input
                  type="checkbox"
                  className="rn-check-box-input"
                  id="exampleCheck1"
                />
                <label className="rn-check-box-label" htmlFor="exampleCheck1">
                  Remember me leter
                </label>
              </div>
              <button type="submit" className="btn btn-primary mr--15">
                Log In
              </button>
              <a href="sign-up.html" className="btn btn-primary-alta">
                Sign Up
              </a>
            </form>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="social-share-media form-wrapper-one">
            <h6>Another way to log in</h6>
            <p>
              {" "}
              Lorem ipsum dolor sit, amet sectetur adipisicing elit.cumque.
            </p>
            <button className="another-login login-facebook">
              {" "}
              <img
                className="small-image"
                src="assets/images/icons/google.png"
                alt=""
              />{" "}
              <span>Log in with Google</span>
            </button>
            <button className="another-login login-facebook">
              {" "}
              <img
                className="small-image"
                src="assets/images/icons/facebook.png"
                alt=""
              />{" "}
              <span>Log in with Facebook</span>
            </button>
            <button className="another-login login-twitter">
              {" "}
              <img
                className="small-image"
                src="assets/images/icons/tweeter.png"
                alt=""
              />{" "}
              <span>Log in with Twitter</span>
            </button>
            <button className="another-login login-linkedin">
              {" "}
              <img
                className="small-image"
                src="assets/images/icons/linkedin.png"
                alt=""
              />{" "}
              <span>Log in with linkedin</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* login form end */}
</>
    </div>
  )
}
