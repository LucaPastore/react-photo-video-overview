export default function JourneyElement({ video }) {
  return (
    <div>
      <video controls width="1000">
        <source src={video.url} type="video/mp4"></source>
        Il tuo browser non supporta il tag video.
      </video>
      <p>
        Author: <strong>{video.author}</strong>
      </p>
    </div>
  );
}
