import CustomFormField from "../components/custom_form_field";
import "../styles/register.css"
const Register = ()=>{
    return(
        <div id="register-box">
            <h1>Registration</h1>
            <div className="reg-row-field">
                <CustomFormField
                    label="Full Name"
                    cName="full-name"
                    type="text"
                    placeholder="Enter Full Name"
                />
                <CustomFormField
                    label="User Name"
                    cName="user-name"
                    type="text"
                    placeholder="Enter your user name"
                />
            </div>
        </div>
    );
}
export default Register