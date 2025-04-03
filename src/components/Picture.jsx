import classes from "./Picture.module.css";

export default function Picture({ id, src, alt, photographer, onSelectPhoto }) {
  return <img className={classes.list} src={src} alt={alt} onClick={onSelectPhoto} />;
}
