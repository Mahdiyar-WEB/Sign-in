import Form from "./Form/Form";
import styles from './body.module.css'

const Body = ({isDark}) => {
    return ( 
        <div className={styles.container}>
            <Form isDark={isDark}/>
            <img className={styles.girl} src={require("./../../assets/images/girl.png")} alt="girl" />
        </div>
     );
}
 
export default Body;