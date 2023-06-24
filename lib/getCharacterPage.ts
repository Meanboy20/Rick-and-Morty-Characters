export default async function getCharacterPage(pageId: string) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageId}`
  );

  if (!res.ok) throw new Error("failed to fetch character info");

  return res.json();
}
