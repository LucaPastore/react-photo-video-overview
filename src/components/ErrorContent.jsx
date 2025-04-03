import { Link } from "react-router-dom";
import classes from "./ErrorContent.module.css";

export default function ErrorContent() {
  return (
    <div className={classes["error-container"]}>
      <h1> Bro hai sbagliato pagina</h1>
      <Link to="/"> Home </Link>
    </div>
  );
}
