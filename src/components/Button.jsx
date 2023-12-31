import React from "react";
import {
  WallpaperRounded,
  AddRounded,
  CheckRounded,
  SearchRounded,
  SettingsRounded,
  DownloadRounded,
  CalculateOutlined,
} from "@mui/icons-material";

const Icon = ({ name, size = "md" }) => {
  const classes = {
    md: "h-5 w-5 fill-current",
    lg: "h-7 w-7 fill-current",
  };

  const sizeClass = classes[size];

  return (
    <svg className={`inline-block ${sizeClass}`}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

const iconsMap = {
  wallpaper: WallpaperRounded,
  add: AddRounded,
  check: CheckRounded,
  search: SearchRounded,
  settings: SettingsRounded,
  download: DownloadRounded,
  calculator: CalculateOutlined,
};

const Button = ({
  children,
  variant = "default",
  size = "md",
  iconBefore,
  iconAfter,
  onClick,
}) => {
  const classes = {
    default: `bg-stone-50 text-stone-600 border-stone-800 border font-bold py-2 px-4 hover:bg-stone-800 hover:text-white`,
    primary: `bg-stone-100 text-stone-600 border-stone-800 border font-bold py-2 px-4 hover:bg-stone-800 hover:text-white`,
    secondary: `bg-stone-300 text-stone-600 border-stone-800 border text-stone-900 font-bold py-2 px-4 hover:bg-stone-800 hover:text-white`,
    success: `bg-green-100 text-white border-green-600 border font-bold py-2 px-4 hover:bg-stone-800 hover:text-white`,
    warning: `bg-orange-100 text-white border-orange-600 border font-bold py-2 px-4 hover:bg-stone-800 hover:text-white`,
    simple: `bg-stone-50 text-stone-600 border-stone-800 border font-bold py-2 px-4 hover:bg-stone-600 hover:text-white`,
  };

  const variantClass = classes[variant || "default"];
  const sizeClass = `text-${size === "small" ? "sm" : "lg"}`;

  const getIcon = (iconProp) => {
    const IconComponent = iconsMap[iconProp];
    if (IconComponent) {
      return <IconComponent />;
    } else {
      return <Icon name={iconProp} />;
    }
  };

  return (
    <button
      className={`${variantClass} ${sizeClass} gap-2 flex`}
      onClick={onClick}
    >
      {iconBefore && getIcon(iconBefore)}
      {children}
      {iconAfter && getIcon(iconAfter)}
    </button>
  );
};

export default Button;
