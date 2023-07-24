import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout/layout";
import VideoView from './components/videoview/videoview'
// import SideBar from "./components/sidebar/sidebar";

function App() {
  return <div className="App">
    <Layout><VideoView></VideoView></Layout>

  </div>;
}

export default App;
