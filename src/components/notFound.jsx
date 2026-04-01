import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1 className="text-red-400 text-9xl font-bold text-center mt-60">404</h1>
      <div className="text-center mt-10">
        <Link to="/" className="btn">
          Grįžti į pagrindinį puslapį
        </Link>
      </div>
    </>
  );
};
