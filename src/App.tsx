import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import Aboute from "./pages/Aboute";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboute />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Container>
  );
};

export default App;
