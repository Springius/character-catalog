export const Card = ({
  id,
  name,
  age,
  job,
  img,
  characters,
  setCharacters,
  setEditCharacter,
}) => {
  const edit = () => {
    setEditCharacter(() => {
      return { id, name, age, job, img };
    });
  };
  const deleteChar = () => {
    setCharacters(() => characters.filter((character) => character.id !== id));
  };

  return (
    <>
      <div className="flex flex-col card">
        <h2 className="text-2xl text-center font-medium">{name}</h2>
        <div
          style={{ backgroundImage: `url(${img})` }}
          className={`w-full h-40 bg-cover bg-center rounded-xl my-2`}
        ></div>
        <p>
          <span className="font-medium">Name:</span> {name}
        </p>
        <p>
          <span className="font-medium">Age:</span> {age}
        </p>
        <p>
          <span className="font-medium">Job:</span> {job}
        </p>
        <section className="flex justify-between mt-4">
          <button onClick={edit}>Edit</button>
          <button onClick={deleteChar} className="bg-red-400!">
            Delete
          </button>
        </section>
      </div>
    </>
  );
};
