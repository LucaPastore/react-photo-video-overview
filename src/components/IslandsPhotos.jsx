import IslandCard from "./IslandCard";
import classes from "./IslandPhotos.module.css";

export default function IslandsPhotos({ islands }) {
  return (
    <ul className={classes["island-list"]}>
      {islands.map((island, index) => (
        <li key={island.id}>
          <IslandCard src={island.url} alt={island.alt} index={index} />
        </li>
      ))}
    </ul>
  );
}
