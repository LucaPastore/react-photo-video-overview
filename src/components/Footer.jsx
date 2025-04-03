import classes from "./Footer.module.css";
import linkedin from "../assets/icons/linkedin.svg";
import facebook from "../assets/icons/facebook.svg";
import tiktok from "../assets/icons/tiktok.svg";
import x from "../assets/icons/x.svg";

export default function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        <h2>Photography</h2>
        <div className={classes.links}>
          <div className={classes.privacy}>Privacy Policy</div>
          <div className={classes.divider}></div>
          <div>Terms & Condition</div>
        </div>
        <div className={classes.social}>
          <a href="/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={tiktok} alt="tiktok" />
          </a>
          <a href="/">
            <img src={x} alt="x" />
          </a>
        </div>
      </div>
    </footer>
  );
}
