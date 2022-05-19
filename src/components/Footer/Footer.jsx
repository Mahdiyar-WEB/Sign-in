import styles from "./footer.module.css";

const Footer = ({isDark}) => {
  return (
    <footer  className={isDark? styles.darkContainer :styles.container}>
      <div className={styles.itemContainer}>
        <p>
          Please don't trust fake accounts. For more info, please follow our
          official channels!
        </p>
        <div className={styles.official}>
          <img src={require("./../../assets/images/telegram.png")} alt="telegram" />
          <img src={require("./../../assets/images/instagram.png")} alt="instagram" />
          <img src={require("./../../assets/images/whatsApp.png")} alt="whatsApp" />
        </div>
        <small className={`${styles.commercial} ${isDark && styles.dark}`}>
            <img src={require("./../../assets/images/commercial.png")} alt="commercial" />
            2021 BM CO. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};
export default Footer;
