import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import AllTransactions from "./components/AllTransactions/AllTransactions";
import NewTransaction from "./components/NewTransaction/NewTransaction";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import SingleTransaction from "./components/SingleTransaction/SingleTransaction";
import EditTransaction from "./components/EditTransaction/EditTransaction";
import BankTotalAccount from "./components/BankTotalAccount/BankTotalAccount";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <BankTotalAccount />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<AllTransactions />} />
          <Route path="/transactions/:id" element={<SingleTransaction />} />
          <Route path="/transactions/:id/edit" element={<EditTransaction />} />
          <Route path="/transactions/new" element={<NewTransaction />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
