export const getLinks = async () => {
  const baseAPI = process.env.NEXT_BASE_API;
  const res = await fetch(`${baseAPI}/links`);
  const data = await res.json();
  return data;
}
