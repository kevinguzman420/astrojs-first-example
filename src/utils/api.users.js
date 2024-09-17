const API_URL_BASE = import.meta.env.PUBLIC_API;

export async function getUsers() {
  const data = await fetch(`${API_URL_BASE}?page=2`);
  const res = await data.json();

  return res;
}

export async function getUserBy(id) {
  const data = await fetch(`${API_URL_BASE}/${id}`)
  const user = await data.json()
  return user
}
