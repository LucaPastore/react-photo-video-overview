import JourneyElement from "./JourneyElement";
import classes from "./JourneysContent.module.css";

export default function JourneysContent({ videos }) {
  return (
    <div>
      <ul className={classes["journey-list"]}>
        {videos.map((video) => (
          <li key={video.id}>
            <JourneyElement video={video} />
          </li>
        ))}
      </ul>
    </div>
  );
}
