import { useState } from "react";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./auth.module.css";

const Auth = () => {
    const [isDark,setIsDark] = useState(false);
    return ( 
        <main className={isDark && styles.dark}>
            <Header isDark={isDark} onClick={()=>setIsDark(!isDark)}/>
            <Body isDark={isDark}/>
            <Footer isDark={isDark}/>
        </main>
     );
}
 
export default Auth;