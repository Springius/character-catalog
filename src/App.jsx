import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { NotFound } from "./components/notFound";
import { Header } from "./components/header";
import { Catalog } from "./components/catalog";
import { About } from "./components/about";

function App() {
  return (
    <>
      <Header title="Character Catalog (CRUD)"></Header>
      <main className="w-170 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
