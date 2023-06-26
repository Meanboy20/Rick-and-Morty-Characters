import CharacterPage from "./component/CharacterPage";

const Page = ({ params }: { params: { page: string } }) => {
  return <CharacterPage params={params} />;
};

export default Page;
