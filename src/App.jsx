import { useLoaderData } from "react-router-dom";
import Coffee from "./Components/Coffee";

function App() {
  const coffees = useLoaderData();
  return (
    <div className="w-10/12 mx-auto space-y-3 ">
      <h1 className="text-6xl font-bold text-green-500 text-center">
        Coffee {coffees.length}
      </h1>
      <div className="grid grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee}></Coffee>
        ))}
      </div>
    </div>
  );
}

export default App;
