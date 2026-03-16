import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ setCharacters, editCharacter }) => {
  const [characterId, updateCharacterId] = useState(null);
  const [nameInput, updateNameInput] = useState("");
  const [ageInput, updateAgeInput] = useState("");
  const [jobInput, updateJobInput] = useState("");
  const [imgInput, updateImgInput] = useState("");

  // čia nieko nėra
  useEffect(() => {
    updateCharacterId(() => editCharacter.id);
    updateNameInput(() => editCharacter.name);
    updateAgeInput(() => editCharacter.age);
    updateJobInput(() => editCharacter.job);
    updateImgInput(() => editCharacter.img);
  }, [editCharacter]);
  //

  const submit = (e) => {
    e.preventDefault();
    updateCharacterId(null);
    updateNameInput("");
    updateAgeInput("");
    updateJobInput("");
    updateImgInput("");

    // Editing
    if (characterId) {
      setCharacters((prev) =>
        prev.map((character) => {
          return characterId === character.id
            ? {
                id: characterId,
                name: nameInput,
                age: ageInput,
                job: jobInput,
                img: imgInput,
              }
            : character;
        }),
      );
      return;
    }

    // Adding new
    const values = Array.from(e.target).map((input) => input.value);
    setCharacters((prev) => [
      {
        id: uuidv4(),
        name: values[0],
        age: values[1],
        job: values[2],
        img: values[3],
      },
      ...prev,
    ]);
  };

  return (
    <>
      <form
        onSubmit={submit}
        className="card flex flex-wrap gap-2 justify-center my-8"
      >
        <input
          type="text"
          name=""
          id="name"
          placeholder="Name"
          value={nameInput}
          onChange={(e) => updateNameInput(e.target.value)}
        />
        <input
          type="number"
          name=""
          id="age"
          placeholder="Age"
          className="w-16"
          value={ageInput}
          onChange={(e) => updateAgeInput(e.target.value)}
        />
        <input
          type="text"
          name=""
          id="job"
          placeholder="Job"
          value={jobInput}
          onChange={(e) => updateJobInput(e.target.value)}
        />
        <input
          type="text"
          name=""
          id="img"
          placeholder="Image URL"
          className="w-100"
          value={imgInput}
          onChange={(e) => updateImgInput(e.target.value)}
        />
        <button className={characterId ? "bg-blue-300!" : ""} type="submit">
          {characterId ? "Edit" : "Add"}
        </button>
      </form>
    </>
  );
};
