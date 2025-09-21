import { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("✅ Effect is running");

    function handleResize() {
      console.log("📏 Window width:", window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      console.log("❌ Cleanup");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Effect;
