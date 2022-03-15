
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gi1P1e4S3nQDO0qJ8VlijO8EKStXSzpb&q=${encodeURI(category)}&limit=8`

    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs
}