const fetchAllPortfolioDatas = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_AWS_API_URL}/items`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};

export default fetchAllPortfolioDatas;
