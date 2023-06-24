import Pageination from "@/app/page/[page]/component/Pageination";
import CharacterBox from "@/app/page/[page]/component/CharacterBox";
import getCharacterPage from "@/lib/getCharacterPage";

type Props = {
  params: {
    page: string;
  };
};

export default async function CharacterPage({ params }: Props) {
  const characterData: Promise<ApiResponse> = getCharacterPage(params.page);
  const characters = await characterData;

  const displayInfo = characters.results.map((result) => ({
    id: result.id,
    name: result.name,
    image: result.image,
  }));

  const content = displayInfo.map((character) => {
    return (
      <CharacterBox
        id={character.id}
        name={character.name}
        image={character.image}
      />
    );
  });

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {content}
          </div>
        </div>
      </div>
      {/* <Pagination totalPages={characters.info.pages} /> */}
      <Pageination
        totalPages={characters.info.pages}
        currentPage={parseInt(params.page)}
      />
    </>
  );
}
