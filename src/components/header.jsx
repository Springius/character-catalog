import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-blue-200 py-10 mb-20">
        <h1 className="text-4xl font-bold text-center mb-10">{props.title}</h1>
        <nav className="flex justify-center gap-4">
          <button onClick={() => navigate("/")}>Pagrindinis puslapis</button>
          <button onClick={() => navigate("/catalog")}>Katalogas</button>
          <button onClick={() => navigate("/about")}>Apie mus</button>
          <button onClick={() => navigate("/random")}>404</button>
        </nav>
      </section>
    </>
  );
};
