import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import PersonInfo from "./components/PersonInfo";
import NewPost from "./components/NewPost";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="container mt-4">
        <div className="row">
          <div className="col-3">
            <PersonInfo />
          </div>
          <div className="col-6">
            <NewPost />
            <div className="row">
              <div className="d-flex justify-content-between align-items-center my-2">
                <hr />
                <div className="d-flex">
                  <p className="m-0">Sıralama ölçütü:</p>
                  <b>En önemli</b>
                </div>
              </div>
            </div>
            <Posts />
          </div>
          <div className="col-3">asd</div>
        </div>
      </div>
    </div>
  );
}

export default App;
