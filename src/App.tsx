import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Afisha } from "./pages/Afisha";
import { Collectives } from "./pages/Collectives";
import { Contacts } from "./pages/Contacts";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-milk text-ink antialiased flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/afisha" element={<Afisha />} />
            <Route path="/collectives" element={<Collectives />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
