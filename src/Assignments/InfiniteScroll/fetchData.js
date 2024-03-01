

export default async (offset = 0, limit = 10) => {
    let url = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`
    let response = await fetch(url);
    return response.json();
}