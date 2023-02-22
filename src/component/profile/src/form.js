import { useState, useEffect } from "react";
import './form.css'
function Form() {
    const initialValues = { Nom: "",  Prenom: "", Tele : "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
      console.log(value)
      console.log(formValues)
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      
      if (!values.Nom) {
        errors.Nom = "Nom is required!";
      }
      if (!values.Prenom) {
        errors.Prenom = "Prenom is required!";
      }
      if (!values.Tele) {
        errors.Tele = "Tele is required!";
      } 
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
  
    return (
      <div className="body_profile">
        <form onSubmit={handleSubmit} className="form_profile">
            <fieldset>
                    <legend>LOGO</legend>
                    <table> 
                        <tr>
                            <td><label className="label ">Nom</label></td>
                            <td><input
                                className="input"
                                type="text"
                                name="Nom"
                                placeholder="Nom"
                                value={formValues.Nom}
                                onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr></tr> 
                        <tr>
                            <td><label className="label ">Prenom</label></td>
                            <td><input
                                className="input"
                                type="text"
                                name="Prenom"
                                placeholder="Prenom"
                                value={formValues.Prenom}
                                onChange={handleChange}
                                />    
                            </td>
                        </tr>
                        <tr></tr>          
                        <tr>
                            <td><label className="label ">Telephone</label></td>
                            <td><input
                                pattern="[+212][0-9]{12}"
                                type="text"
                                name="Tele"
                                className="input"
                                placeholder="Telephone"
                                value={formValues.Tele}
                                onChange={handleChange}
                            />
                            </td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td><label className="label ">Password</label></td>
                            <td><input
                                    className="input"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                        <td><label className="label ">Password</label></td>
                            <td><input
                                    className="input"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="bttn" colSpan="2"><button className="button">Submit</button></td>
                        </tr>
                    </table>
            </fieldset>
        </form>
        
      </div>
    );
  }
  
  export default Form;