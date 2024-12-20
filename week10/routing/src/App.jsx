import { useRef } from "react";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Clock from "./pages/Clock";

// https://petal-estimate-4e9.notion.site/React-Part-1-1177dfd1073580069172fc54e33929c0

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
          <Route path="/chair" element={<Chair />} />
          <Route path="/useref" element={<LearnUseRef />} />
          <Route path="/clock" element={<Clock />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Link to={"/"}>Home |</Link>
      <Link to={"/table"}>Table |</Link>
      <Link to={"/chair"}>Chair </Link>
      <Link to={"/useref"}>useRef </Link>
      <Link to={"/clock"}>Clock </Link>
      <div style={{ height: "90vh" }}>
        <Outlet />
      </div>
      Footer | Contact Us | copyright
    </div>
  );
}

function Home() {
  return <div>This is Home page which have all catagories</div>;
}

function Table() {
  return <div>This is table page</div>;
}

function Chair() {
  const navigate = useNavigate();

  function redirectHome() {
    navigate("/");
  }
  return (
    <div>
      This is Chair page <button onClick={redirectHome}>Go Home</button>
    </div>
  );
}

function ErrorPage() {
  return <div>404, Page not found</div>;
}

function LearnUseRef() {
  const inputRef = useRef(null);

  function focusOnInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      Sign Up
      <input ref={inputRef} type="Name" />
      <input type="Address" />
      <button onClick={focusOnInput}>Submit</button>
    </div>
  );
}

export default App;
