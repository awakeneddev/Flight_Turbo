import "./App.css";
import ThemeImage from "./assets/flight_theme.svg";
import { SelectWithIcon } from "./components/selectField/selectWithIcon";
import { Navbar } from "./components/navbar/navbar";
import { CLASS_ARR, TRIP_ARR } from "./data";
import { FlightForm } from "./components/forms/FlightForm";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <img src={ThemeImage} className="h-[200px] w-full" />
        <h1 className="text-center text-[32px]">Flights</h1>
      </div>
      <FlightForm />
    </>
  );
}

export default App;
