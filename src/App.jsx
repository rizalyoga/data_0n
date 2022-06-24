import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Component
import LoginPage from "./views/pages/loginPage/LoginPage";
import ChatPage from "./views/pages/newsPage/NewsPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
