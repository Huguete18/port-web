"use client";
import { useContext, useEffect } from "react";
import { VisuallyHidden, useSwitch } from "@nextui-org/react";
import MoonIcon from "../../public/Icons/MoonIcon ";
import SunIcon from "../../public/Icons/SunIcon";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitch = (props) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  const { handleChangeTheme, theme } = useContext(ThemeContext);
  useEffect(() => {
    localStorage.theme = theme;
  }, [theme]);

  return (
    <div className="flex flex-col gap-2 justify-center">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
          onClick={handleChangeTheme}
        >
          {theme == "light" ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>
  );
};

export default ThemeSwitch;
