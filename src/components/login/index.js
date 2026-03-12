import "./index.css"
import { Link } from "react-router-dom";

const Login =()=>(
    <>
    <div className="page2">
      <div className="mobile">

        <h2 className="titlelogin">
          Signin to your <br /> PopX account
        </h2>

        <p className="subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <div className="input-field">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <Link to="/account">
        <button type="button" className="login-btn">Login</button>
        
        </Link>


      </div>
    </div>
  </>
)

export default Login;