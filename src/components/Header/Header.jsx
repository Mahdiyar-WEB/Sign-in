import styles from "./header.module.css";

const Header = ({ onClick, isDark }) => {
  return (
    <>
      <header className={styles.container}>
        <div className={isDark ? styles.bgDark : styles.bg}></div>
        <nav className={styles.nav}>
          <img
            className={styles.hamburger}
            src={require("../../assets/images/hamburger.png")}
            alt="hamburger"
          />
          <div>
            {isDark ? (
              <img
                src={require("../../assets/images/lightIcon.png")}
                alt="light"
                onClick={onClick}
              />
            ) : (
              <img
                src={require("../../assets/images/darkIcon.png")}
                alt="light"
                onClick={onClick}
              />
            )}
            <img src={require("../../assets/images/help.png")} alt="help" />
            <img
              src={require("../../assets/images/profile.png")}
              alt="profile"
            />
            <img src={require("../../assets/images/Home.png")} alt="home" />
          </div>
        </nav>
      </header>
      <div className={styles.logo}>
        {isDark ? (
          <img className={styles.darkLogo} src={require("../../assets/images/logoDark.png")} alt="logo" />
        ) : (
          <img className={styles.lightLogo} src={require("../../assets/images/logoLight.png")} alt="logo" />
        )}
      </div>
    </>
  );
};

export default Header;
