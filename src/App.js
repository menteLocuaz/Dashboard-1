import { Sidebar } from "./component/Sidebar/Sidebar";
import { Topbar } from "./component/Topbar/Topbar";
import "./app.css";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
