import { ComponentProps, useEffect, useRef, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
interface Option {
  [key: string]: string | number;
}

interface SearchableDropdownProps extends ComponentProps<"input"> {
  options: Option[];
  label: string;
  id: string;
  selectedVal: string | number | null;
  handleChange: (value: string | number | null) => void;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  label,
  id,
  selectedVal,
  handleChange,
  ...inputProps
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const selectOption = (option: Option) => {
    setQuery("");
    handleChange(option[label]);
    setIsOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    if (e.target === inputRef.current) {
      setIsOpen((prev) => !prev);
    }
  };

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal.toString();
    return "";
  };

  const filteredOptions = options.filter((option) =>
    option[label].toString().toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <div className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={getDisplayValue()}
          onChange={(e) => {
            setQuery(e.target.value);
            handleChange(null);
          }}
          {...inputProps}
          onClick={toggleDropdown}
          className="w-full px-3 py-2 focus:ring-1 focus:ring-blue-400 text-white placeholder:text-white bg-transparent border border-gray-300 rounded focus:outline-none"
        />
        <div
          className="absolute right-3 top-1.8 
          "
        >
          {!isOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-md max-h-48 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <div
              key={`${id}-${index}`}
              onClick={() => selectOption(option)}
              className={`px-3 py-2 cursor-pointer ${
                option[label] === selectedVal
                  ? "bg-blue-100 text-black"
                  : "hover:bg-gray-100"
              }`}
            >
              <p className="text-black">{option[label]}</p>
            </div>
          ))}
          {filteredOptions.length === 0 && (
            <div className="px-3 py-2 text-black">No result found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
