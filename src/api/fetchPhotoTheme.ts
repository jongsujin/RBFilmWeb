const fetchPhotoTheme = async (THEME: string) => {
  // res 수정 필요
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_AWS_API_URL}/items/${THEME}`,
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};

export default fetchPhotoTheme;
