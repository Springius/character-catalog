import { Card } from "./card";
import data from "../data/characters";

export const Catalog = ({ characters, setCharacters, setEditCharacter }) => {
  return (
    <>
      <section className="grid grid-cols-3 gap-6 mt-20">
        {(characters || data).map((char) => {
          return (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              age={char.age}
              job={char.job}
              img={char.img}
              characters={characters}
              setCharacters={setCharacters}
              setEditCharacter={setEditCharacter}
            ></Card>
          );
        })}
      </section>
    </>
  );
};
