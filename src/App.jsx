import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/bottles/Bottles";

const bottlesPromise = fetch("/public/bottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <h1>Welcome to Awesome Bottles Store</h1>
      <Suspense fallback={<h3>Awesome Bottles are Coming...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
