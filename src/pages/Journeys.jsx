import { Await, useLoaderData } from "react-router-dom";
import JourneysContent from "../components/JourneysContent";
import { fetchGreeceVideos } from "../http/PexelClient";
import { Suspense } from "react";
import { Loader } from "../components/Loader";

export default function JourneysPage() {
  const { videos } = useLoaderData();

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={videos}>
        {(loadedVideos) => <JourneysContent videos={loadedVideos} />}
      </Await>
    </Suspense>
  );
}

async function loadJourneysVideo() {
  const fetchedVideos = await fetchGreeceVideos();
  return fetchedVideos;
}

export async function loader() {
  return { videos: loadJourneysVideo() };
}
