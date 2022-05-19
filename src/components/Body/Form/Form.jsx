import { useFormik } from "formik";
import styles from "./form.module.css";
import * as Yup from "yup";
import { useState } from "react";

const initialValues = {
  email: "",
  password: "",
  robot: false,
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string()
    .required("Please Enter Your Password")
    .min(3, "Enter More Than 3 Character"),
    robot: Yup.boolean()
    .required()
    .oneOf([true], "You must accept the pricing policy terms and conditions"),
});

const Form = ({isDark}) => {
    const [isHide,setIsHide] = useState(true);
  const onSubmit = (values) => {
    alert(`Email:${values.email} and Password:${values.password}`);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
  });
  return (
    <form onSubmit={formik.handleSubmit} className={`${styles.container} ${isDark && styles.dark}`}>
      <h2 className={isDark && styles.dark}>SIGN IN</h2>
      <div className={styles.imgcontainer}>
        <label htmlFor="email">Email</label>
        <input
          {...formik.getFieldProps("email")}
          className={isDark ? styles.darkInp :styles.input}
          placeholder="Enter Email to Proceed"
          type="email"
          name="email"
          id="email"
        />
        <img
          className={styles.innerImg}
          src={require("./../../../assets/images/eamil.png")}
          alt="email"
        />
        {formik.errors.email && formik.touched.email && (
          <div style={{ color: "red", fontSize: ".9rem" }}>
            {formik.errors.email}
          </div>
        )}
      </div>
      <div className={styles.imgcontainer}>
        <label htmlFor="password">Password</label>
        <input
          {...formik.getFieldProps("password")}
          className={isDark ? styles.darkInp :styles.input}
          placeholder="Enter Password to Proceed"
          type={isHide ? "password":"text"}
          name="password"
          id="password"
        />
        <img
          className={styles.innerImg}
          src={require("./../../../assets/images/password.png")}
          alt="key"
        />
        <img
          className={styles.innerImg2}
          onClick={()=>setIsHide(!isHide)}
          src={require("./../../../assets/images/hidden.png")}
          alt="hidden"
        />
        {formik.errors.password && formik.touched.password && (
          <div style={{ color: "red", fontSize: ".9rem" }}>
            {formik.errors.password}
          </div>
        )}
      </div>
      <div>
        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>
      <div className={`${styles.captcha} ${isDark ? styles.darkCaptcha : ''}`}>
        <div>
          <input
            type="checkbox"
            checked={formik.values.robot}
            onChange={formik.handleChange}
            value={true}
            name="robot"
            onBlur={formik.handleBlur}
            id="robot"
          />
          <label htmlFor="robot">Im not a robot</label>
          
        </div>
        
        <img
          src={require("./../../../assets/images/recaptcha.png")}
          alt="recaptcha"
        />
      </div>
      {formik.errors.robot && formik.touched.robot && (
            <div style={{ color: "red", marginTop:"-10px" }}>{formik.errors.robot}</div>
          )}
      <button type="submit" className={isDark ? styles.darkBtn : ''}>Sign in</button>
      <div className={styles.google}>
        <img
          src={require("./../../../assets/images/google.png")}
          alt="google"
        />
      </div>
      <a href="/#" className={isDark && styles.dark}>SIGN UP HERE</a>
    </form>
  );
};

export default Form;
