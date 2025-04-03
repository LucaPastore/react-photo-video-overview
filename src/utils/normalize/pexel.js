export function normalizePhotos(responsePhotos) {
    const normalizedPhotos = responsePhotos.map(photo => ({
        id: photo.id,
        alt: photo.alt,
        photographer: photo.photographer,
        url: photo.src.medium,
        overViewUrl: photo.src.original
    }))
    return normalizedPhotos
}

export function normalizeVideos(responseVideos) {
    console.log(responseVideos)
    const normalizedVideos = responseVideos.map(video => ({
        id: video.id,
        image: video.image,
        author: video.user.name,
        url: video.video_files[2].link
    }))
    return normalizedVideos
}