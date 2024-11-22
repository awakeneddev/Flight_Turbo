import BackpackIcon from "@mui/icons-material/Backpack";
import ExploreIcon from "@mui/icons-material/Explore";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";

export interface NavlistProps {
  id: number;
  label: string;
  icon: React.ElementType;
}

export const NAVLIST: NavlistProps[] = [
  {
    id: 1,
    label: "Travel",
    icon: BackpackIcon,
  },
  {
    id: 2,
    label: "Explore",
    icon: ExploreIcon,
  },
  {
    id: 3,
    label: "Flights",
    icon: FlightIcon,
  },
  {
    id: 4,
    label: "Hotels",
    icon: HotelIcon,
  },
];
export interface Option {
  value: number | string;
  name: string;
}
export const TRIP_ARR: Option[] = [
  {
    value: 1,
    name: "One Way",
  },
  {
    value: 2,
    name: "Round Trip",
  },
  {
    value: 3,
    name: "Multi-City",
  },
];
export const CLASS_ARR: Option[] = [
  {
    value: 1,
    name: "Economy",
  },
  {
    value: 2,
    name: "Premium Economy",
  },
  {
    value: 3,
    name: "Business",
  },
  {
    value: 4,
    name: "First",
  },
];

