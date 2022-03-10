import ReactDOM from "react-dom";
import Navbar from "./Navbar";

function App() {
    return (
        <div>
            <Navbar />
            {/* <Corpo /> */}
        </div>
    )
}

const divRoot = document.querySelector(".root");
ReactDOM.render(<App />, divRoot);