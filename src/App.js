import { useEffect, useState } from "react";
import CardSkeleton from "./components/skeleton";
import Hero  from "./components/hero";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ title: "Hello World" });
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
    <div className="p-10">
      {loading ? (
        <CardSkeleton />
      ) : (
        <div className="p-4 border rounded-xl">
          <h2>{data.title}</h2>
        </div>
      )}
    </div>

     <Hero />
    </div>
  );
}