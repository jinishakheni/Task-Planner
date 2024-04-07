import classes from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <a
        href="https://github.com/jinishakheni/Task-Planner"
        className={classes.link}
      >
        GitHub Repository
      </a>
    </div>
  );
};

export default Footer;
