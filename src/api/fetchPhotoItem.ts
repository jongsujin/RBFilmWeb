import { FetchPhotoItemProps } from "@/types/fetchPhotoItemType";

const fetchPhotoItem = async ({ THEME }: FetchPhotoItemProps) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_AWS_PHOTO_API_URL}/items/${THEME}`,
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};

export default fetchPhotoItem;
