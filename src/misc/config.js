const API_URL = 'https://api.tvmaze.com';

export async function getAPI(query) {
  const response = await fetch(`${API_URL}${query}`).then(res => res.json());
  return response;
}
