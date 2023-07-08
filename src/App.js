import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import AllTransactions from "./components/AllTransactions/AllTransactions";
import NewTransaction from "./components/NewTransaction/NewTransaction";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import SingleTransaction from "./components/SingleTransaction/SingleTransaction";
import EditTransaction from "./components/EditTransaction/EditTransaction";
import DeleteTransaction from "./components/DeleteTransaction/DeleteTransaction";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/transactions" element={<AllTransactions />}></Route>
          <Route
            path="/transactions/:id"
            element={<SingleTransaction />}
          ></Route>
          <Route
            path="/transactions/:id/edit"
            element={<EditTransaction />}
          ></Route>
          <Route
            path="/transactions/:id/delete"
            element={<DeleteTransaction />}
          ></Route>
          <Route path="/transactions/new" element={<NewTransaction />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
