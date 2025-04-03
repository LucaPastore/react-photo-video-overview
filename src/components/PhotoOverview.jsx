import classes from "./PhotoOverview.module.css";

export default function PhotoOverview({ photo, onClose }) {
  return (
    <section className={classes.overview}>
      <div className={classes.overlay} onClick={onClose}></div>
      <div className={classes["image-container"]}>
        <img src={photo.overViewUrl} alt={photo.alt} />
        <button className={classes.close} onClick={onClose}>
          X
        </button>
        <div className={classes.info}>
          <h2>{photo.alt}</h2>
          <p>
            Photographer: <strong>{photo.photographer}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
