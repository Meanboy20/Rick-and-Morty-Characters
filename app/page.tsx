import CharacterBox from "@/app/page/[page]/component/CharacterBox";
import getCharacterPage from "@/lib/getCharacterPage";
import CharacterPage from "./page/[page]/component/CharacterPage";

export default async function Home({ params }: { params: { page: string } }) {
  return <CharacterPage params={{ page: "1" }} />;
}
