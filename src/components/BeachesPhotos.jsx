import { useState } from "react";
import Picture from "./Picture";
import classes from "./BeachesPhotos.module.css";
import PhotoOverview from "./PhotoOverview";

export default function BeachesPage({ beaches }) {
  const [photoInOverview, setPhotoInOverview] = useState(null);

  console.log(beaches);

  function handleSelectPhoto(photo) {
    setPhotoInOverview(photo);
  }

  function handleCloseOverview() {
    setPhotoInOverview(null);
  }

  return (
    <>
      {photoInOverview && (
        <PhotoOverview photo={photoInOverview} onClose={handleCloseOverview} />
      )}
      {beaches.length === 0 && (
        <p className={classes["no-results"]}>
          Spiacenti, non ci sono foto disponibili.
        </p>
      )}
      {beaches.length > 0 && (
        <ul className={classes["beaches-list"]}>
          {beaches.map((beachPhoto) => (
            <li key={beachPhoto.id}>
              <Picture
                id={beachPhoto.id}
                src={beachPhoto.url}
                alt={beachPhoto.alt}
                photographer={beachPhoto.photographer}
                overviewUrl={beachPhoto.overviewUrl}
                onSelectPhoto={() => handleSelectPhoto(beachPhoto)}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
