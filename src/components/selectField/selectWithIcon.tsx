import AllOutIcon from "@mui/icons-material/AllOut";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BusinessIcon from "@mui/icons-material/Business";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FlightClassIcon from "@mui/icons-material/FlightClass";
import RecommendIcon from "@mui/icons-material/Recommend";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Box, MenuItem, Select, SelectProps, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Option } from "../../data";
const PREFIX = "FlightForm";
const classes = {
  root: `${PREFIX}-root`,
  select: `${PREFIX}-select`,
  box: `${PREFIX}-box`,
  menuItem: `${PREFIX}-menuItem`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.select}`]: {
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      border: 0, // Default border color
    },
    "&:focus": {
      borderColor: "white",
      border: 1,
    },
    "& .MuiSelect-icon": {
      color: "white",
    },
  },
  [`& .${classes.box}`]: {
    display: "flex",
    gap: theme.spacing(2),
  },
  [`& .${classes.menuItem}`]: {},
}));

type DynamicFlightFormProps = SelectProps & {
  options: Option[];
  defaultValue: number | string;

  type: string;
};
export const SelectWithIcon = ({
  defaultValue,
  options,
  type,
}: DynamicFlightFormProps) => {
  const TripIcon: Record<number | string, JSX.Element> = {
    1: <ArrowRightAltIcon />,
    2: <CompareArrowsIcon />,
    3: <AllOutIcon />,
  };
  const ClassIcon: Record<number | string, JSX.Element> = {
    1: <RecommendIcon />,
    2: <WorkspacePremiumIcon />,
    3: <BusinessIcon />,
    4: <FlightClassIcon />,
  };

  const getIcons = (val: number, type: string) => {
    if (type === "TRIP") {
      return TripIcon[val];
    } else {
      return ClassIcon[val];
    }
  };

  return (
    <Root>
      <Select
        defaultValue={defaultValue}
        displayEmpty
        className={classes.select}
        renderValue={(value) => (
          <Box className={classes.box}>
            <SvgIcon>{getIcons(value as number, type)}</SvgIcon>
            {options.find((v) => v.value === Number(value))?.name}
          </Box>
        )}
      >
        {options.map((v) => {
          return (
            <MenuItem key={v.value} value={v.value}>
              {v.name}
            </MenuItem>
          );
        })}
      </Select>
    </Root>
  );
};
