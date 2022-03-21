import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          {/* <Route path="/about" element={<Outlet />}> */}
          {/* <Route index element={<About />} /> */}
          <Route path="child1" element={<Child1 />} />
          <Route path="child2" element={<Child2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
