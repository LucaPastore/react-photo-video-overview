import classes from "./IslandCard.module.css";

export default function IslandCard({ src, alt, index }) {
  const invertedLayout = index % 2 === 0;

  return (
    <div
      className={`${classes["card-layout"]} ${
        invertedLayout ? classes["card-layout-inverted"] : undefined
      }`}
    >
      <img src={src} className={classes["image-container"]} />
      <p className={classes["card-text"]}>{alt}</p>
    </div>
  );
}
