import { MenuItem } from "@mui/material";
import { CLASS_ARR, TRIP_ARR } from "../../data";
import { SelectField } from "../selectField/selectField";
import { SelectWithIcon } from "../selectField/selectWithIcon";
import { PrimaryButton } from "../button/primaryButton";
import { useState } from "react";
import SearchableDropdown from "../searhcable/searchableDropdown";
import DateButton from "../button/buttonDate";
interface PersonCount {
  adults: number;
  children: number;
  infants: number;
  infantsOnLap: number;
}
export const FlightForm = () => {
  const initialNoOfPerson: PersonCount = {
    adults: 0,
    children: 0,
    infants: 0,
    infantsOnLap: 0,
  };

  const [noOfPerson, setNoOfPerson] = useState<PersonCount>(initialNoOfPerson);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selected, setSelected] = useState<string | number | null>(null);

  const options = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
  ];
  const updatePersonCount = (key: keyof PersonCount, delta: number) => {
    setNoOfPerson((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta), // Ensuring no negative values
    }));
  };
  const handleDone = () => {
    console.log("Passengers updated:", noOfPerson);
    setIsSelectOpen(false); // Close the dropdown
  };

  const handleCancel = () => {
    setNoOfPerson(initialNoOfPerson); // Reset to initial state
    setIsSelectOpen(false); // Close the dropdown
  };

  const getTotalPassengers = () => {
    return (
      noOfPerson.adults +
      noOfPerson.children +
      noOfPerson.infants +
      noOfPerson.infantsOnLap
    );
  };

  const renderPersonCount = (label: string, key: keyof PersonCount) => (
    <div className="flex items-center justify-between gap- w-full">
      <p className="flex-grow">{label}</p>
      <div className="flex gap-2">
        <button
          className="bg-white text-black rounded-md h-6 w-6 flex justify-center items-center"
          onClick={() => updatePersonCount(key, -1)}
        >
          -
        </button>
        <span>{noOfPerson[key]}</span>
        <button
          className="bg-white text-black rounded-md h-6 w-6 flex justify-center items-center"
          onClick={() => updatePersonCount(key, 1)}
        >
          +
        </button>
      </div>
    </div>
  );
  return (
    <form className="bg-[#36373A] p-4 mx-4 md:mx-32 lg:mx-60">
      <div className=" flex  justify-between">
        <div className="flex">
          <SelectWithIcon
            defaultValue={TRIP_ARR[0].value}
            options={TRIP_ARR}
            type="TRIP"
          />
          <SelectWithIcon
            defaultValue={CLASS_ARR[0].value}
            options={CLASS_ARR}
            type="CLASS"
          />
        </div>
        <div className="w-[150px]">
          <SelectField
            label="Passengers"
            open={isSelectOpen}
            onOpen={() => setIsSelectOpen(true)}
            onClose={() => null}
            borderColor="white"
            value={getTotalPassengers()}
          >
            <MenuItem value={getTotalPassengers()}>
              {getTotalPassengers()}
            </MenuItem>

            <MenuItem>{renderPersonCount("Adults", "adults")}</MenuItem>
            <MenuItem>{renderPersonCount("Children", "children")}</MenuItem>
            <MenuItem>{renderPersonCount("Infants", "infants")}</MenuItem>
            <MenuItem>
              {renderPersonCount("Infants on Lap", "infantsOnLap")}
            </MenuItem>
            <MenuItem>
              <div className="flex justify-between gap-2">
                <PrimaryButton
                  variant="contained"
                  color="primary"
                  onClick={handleDone}
                  label="Done"
                />
                <PrimaryButton
                  variant="outlined"
                  color="secondary"
                  onClick={handleCancel}
                  label="Cancel"
                />
              </div>
            </MenuItem>
          </SelectField>
        </div>
      </div>
      <div className="flex gap-2 justify-between  mx-4 my-2">
        <SearchableDropdown
          options={options}
          label="name"
          placeholder="from where ?"
          id="dropdown"
          selectedVal={selected}
          handleChange={setSelected}
        />
        <SearchableDropdown
          options={options}
          label="name"
          placeholder="to Destination ..."
          id="dropdown"
          selectedVal={selected}
          handleChange={setSelected}
        />

        <DateButton id="1" />
        <DateButton id="2" />
      </div>
    </form>
  );
};
