import { createClient } from "pexels"
import { normalizePhotos, normalizeVideos } from "../utils/normalize/pexel"

const API_KEY = 'zLlS1XRNzYNfiWUlZYnYkFjczqbxonQ7djiT8GeYU4wG3gRlB0Ub0DJg'
const client = createClient(API_KEY)

console.log("SONO CLIENT ESEGUITO")

async function fetchPhotos(query) {
    try {
        const response = await client.photos.search({ query });
        return normalizePhotos(response.photos || [])
    } catch (e) {
        console.log("c'è stato un errore nel fetching: " + e.message)
        return []
    }
}

async function fetchVideos(query) {
    try {
        const response = await client.videos.search({ query, per_page: 3 })
        return normalizeVideos(response.videos || [])
    } catch (e) {
        console.log("C'è stato un errore nel fetching dei video: " + e.message)
    }

}

export async function fetchBeaches() {
    const query = "beach";
    const results = await fetchPhotos(query)
    return results
}

export async function fetchIslands() {
    const query = "island"
    const results = await fetchPhotos(query)
    return results
}

export async function fetchGreeceVideos() {
    const query = "Greece"
    const results = await fetchVideos(query)
    return results
}
