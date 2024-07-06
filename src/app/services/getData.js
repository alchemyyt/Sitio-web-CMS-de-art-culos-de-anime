const url = process.env.NEXT_PUBLIC_API_URL;

export async function getData(endpoint) {
  const res = await fetch(`${url}/${endpoint}`);
  const dataJson = await res.json();
  const dataArray = dataJson.docs;
  return dataArray;
}
