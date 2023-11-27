import { Link } from "react-router-dom"
import { useVerify } from "../hooks/useVerify"
import './Verify.css'

const Verify = () => {
    const { update } = useVerify()
    const { user } = JSON.parse(localStorage.getItem('user'))

    update()

    if (!user || !user.emailVerified) {
        return (
            <div className="bg">
                <div className="verify-container verify-unsuccess">
                    <h2 className="verify-h2">Sorry! Something went wrong! Account was not verified!</h2>
                    <p>Please return to login page.</p>
                    <Link to='/login'><button className="verify-button verify-button-unsuccess">Return to Login</button></Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="bg">
                <div className="verify-container verify-success">
                    <h2 className="verify-h2">Account successfully verified!</h2>
                    <p className="verify-p">Please click the button below to login.</p>
                    <Link to='/login'><button className="verify-button">Login</button></Link>
                </div>
            </div>
        )
    }
}

export default Verify
