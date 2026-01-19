import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/language-context";
import Index from "./pages/Index";
import Streaming from "./pages/Streaming";
import Hackathon from "./pages/Hackathon";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/streaming" element={<Streaming />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;