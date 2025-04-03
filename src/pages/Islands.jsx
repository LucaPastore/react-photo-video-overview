import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { fetchIslands } from "../http/PexelClient";
import IslandsPhotos from "../components/IslandsPhotos";
import { Loader } from "../components/Loader";

export default function IslandPage() {
  const { islands } = useLoaderData();

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={islands}>
        {(fetchedIslands) => <IslandsPhotos islands={fetchedIslands} />}
      </Await>
    </Suspense>
  );
}
async function loadIslands() {
  const fetchedIslands = await fetchIslands();
  return fetchedIslands;
}
export async function loader() {
  return { islands: loadIslands() };
}
