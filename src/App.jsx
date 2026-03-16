import { useState } from "react";
import { Card } from "./components/card";
import { Header } from "./components/header";
import data from "./data/characters";
import { Form } from "./components/form";

function App() {
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
      <Header title="Character Catalog (CRUD)"></Header>
      <main className="w-170 mx-auto">
        <Form
          editCharacter={editCharacter}
          setCharacters={setCharacters}
        ></Form>
        <section className="grid grid-cols-3 gap-6">
          {characters.map((obj) => {
            return (
              <Card
                key={obj.id}
                id={obj.id}
                name={obj.name}
                age={obj.age}
                job={obj.job}
                img={obj.img}
                characters={characters}
                setCharacters={setCharacters}
                setEditCharacter={setEditCharacter}
              ></Card>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
