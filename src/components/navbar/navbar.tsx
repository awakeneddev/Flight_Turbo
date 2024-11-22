import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { NAVLIST, NavlistProps } from "../../data";
import { PrimaryButton, Size } from "../button/primaryButton";
import { useDeviceSize, DeviceType } from "../../hooks/useDeviceSize";

const DrawerMenu = ({
  isOpen,
  toggleDrawer,
}: {
  isOpen: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}) => (
  <Drawer open={isOpen} onClose={toggleDrawer(false)}>
    <div className="min-w-[200px] max-w-[300px] p-4 h-screen bg-base">
      <ul className="flex flex-col gap-4">
        {NAVLIST.map((item) => (
          <div key={item.id} className="flex gap-3 items-center">
            <item.icon style={{ color: "#fff" }} size="small" />
            <p className="text-sm text-white">{item.label}</p>
          </div>
        ))}
      </ul>
    </div>
  </Drawer>
);

const NavButtons = () => (
  <div className="flex gap-2 items-center sm:mr-4 md:ml-6">
    {NAVLIST.map((item: NavlistProps) => (
      <PrimaryButton
        key={item.id}
        label={item.label}
        size={Size.SMALL}
        startIcon={<item.icon />}
      />
    ))}
  </div>
);

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const deviceType = useDeviceSize();

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsDrawerOpen(newOpen);
  };

  return (
    <nav className="border-b p-2 md:px-6 md:py-2 flex justify-between items-center text-white">
      <div className="flex items-center">
        {/* Hamburger Menu */}
        <IconButton
          style={{ color: "#fff" }}
          onClick={toggleDrawer(true)}
          aria-label="Open Menu"
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer Component */}
        <DrawerMenu isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

        {/* Logo or Title */}
        <p>Flight Turbo</p>

        {/* Navigation Buttons (hidden on mobile) */}
        {deviceType !== DeviceType.MOBILE && <NavButtons />}
      </div>

      {/* Placeholder for Profile or Actions */}
      <div className="h-8 w-8 bg-white rounded-full"></div>
    </nav>
  );
};
