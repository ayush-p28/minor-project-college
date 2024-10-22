// import React from 'react';
import './login.css';
import Alert from './Alert.jsx'

const HeaderWithWaves = () => {
  return (
    <div className="header">
      {/* Content before waves */}
      <Alert/>
      <div className="inner-header flex">
        <div className="row mt-5">
          <div className="card shadow px-5 pb-5 mb-3 text-dark mt-5 border border-dark" style={{ borderRadius: '1rem' }} id="modal_signin">
            <form action="login.do" method="post">
              <h2 className="font-weight-bold">SignIn</h2>
              <div className="text-center my-2">
                <p>Sign in with:</p>
                <button type="button" className="btn btn-floating">
                  <i className="fa-brands fa-facebook"></i>
                </button>
                <button type="button" className="btn btn-floating">
                  <i className="fab fa-google"></i>
                </button>
                <button type="button" className="btn btn-floating">
                  <i className="fab fa-twitter"></i>
                </button>
                <button type="button" className="btn btn-floating">
                  <i className="fab fa-github"></i>
                </button>
              </div>
              <div className="form-group">
                <input type="email" className="form-control form-control-lg" name="email" id="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control form-control-lg" name="password" id="pwd" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-dark btn-lg btn-block">SignIn</button>
            </form>
            <a href="#" className="my-2">Forgot your password</a>
            <p className="my-2">Not a member ? <a href="#">create account</a></p>
          </div>
        </div>
      </div>

      {/* Waves Container */}
      <div>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      {/* Waves end */}
    </div>
  );
};

export default HeaderWithWaves;
