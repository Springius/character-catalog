import { useState } from "react";
import data from "../data/characters";
import { Form } from "./form";
import { Catalog } from "./catalog";

export const Home = () => {
  const [characters, setCharacters] = useState(data);
  const [editCharacter, setEditCharacter] = useState({
    id: null,
    name: "",
    age: "",
    job: "",
    img: "",
  });

  return (
    <>
      <Form editCharacter={editCharacter} setCharacters={setCharacters}></Form>
      <Catalog
        characters={characters}
        setCharacters={setCharacters}
        setEditCharacter={setEditCharacter}
      ></Catalog>
    </>
  );
};
