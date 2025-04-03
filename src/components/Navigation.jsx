import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Spiagge
          </NavLink>
        </li>
        <li>
          <NavLink
            to="islands"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Isole
          </NavLink>
        </li>
        <li>
          <NavLink
            to="journeys"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Viaggi
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
