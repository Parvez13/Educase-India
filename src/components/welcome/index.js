import {Link} from 'react-router-dom'
import './index.css'

const Welcome = () =>(
    <>
        <div className="main-container">
            <div className="container">
                <div className="content">
                    <h1>Welcome to PopX</h1>
        
                    <p>
                    Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit,
                    </p>
                    <Link to="/signup">
                        <button type="button" className="create-btn">
                            Create Account
                        </button>
                    </Link>

                    <Link to="/login">
                        <button type="button" className="login-btn">
                            Already Registered? Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </>
)

export default Welcome