export const Header = (props) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-10 mb-4 bg-blue-200">
        {props.title}
      </h1>
    </>
  );
};
