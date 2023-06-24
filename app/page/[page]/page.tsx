import CharacterPage from "./component/CharacterPage";

const Page = ({ params }: { params: { page: string } }) => {
  console.log(params);
  return <CharacterPage params={params} />;
};

export default Page;
