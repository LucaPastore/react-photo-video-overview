import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { fetchBeaches } from "../http/PexelClient";
import BeachesPhotos from "../components/BeachesPhotos";
import { Loader } from "../components/Loader";

export default function BeachesPage() {
  const { beaches } = useLoaderData();

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={beaches}>
        {(loadedBeaches) => <BeachesPhotos beaches={loadedBeaches} />}
      </Await>
    </Suspense>
  );
}

async function loadBeaches() {
  const beaches = await fetchBeaches();
  return beaches;
}

export async function loader() {
  return { beaches: loadBeaches() };
}
