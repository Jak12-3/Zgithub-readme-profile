// Represents the available themes for GitHub stats cards
export type Themes = {
  [key: string]: {
    title_color?: string;
    text_color?: string;
    icon_color?: string;
    border_color?: string;
    bg_color?: string;
    stroke_color?: string;
    username_color?: string;
  };
};

// Object containing various predefined themes for GitHub stats cards
export const themes: Themes = {
  // Solid themes
  default: {
    title_color: "2f80ed",
    text_color: "434d58",
    icon_color: "4c71f2",
    border_color: "e4e2e2",
    bg_color: "ffffff",
  },
  transparent: {
    title_color: "2f80ed",
    text_color: "434d58",
    icon_color: "4c71f2",
    border_color: "e4e2e2",
    bg_color: "ffffff00",
  },
  dark: {
    title_color: "fff",
    icon_color: "79ff97",
    text_color: "9f9f9f",
    stroke_color: "594545",
    bg_color: "151515",
    username_color: "fff",
  },
  highcontrast: {
    title_color: "e7f216",
    icon_color: "00ffff",
    text_color: "fff",
    stroke_color: "191919",
    bg_color: "000",
  },
  "catppuccin-latte": {
    title_color: "137980",
    text_color: "4c4f69",
    icon_color: "8839ef",
    bg_color: "eff1f5",
    stroke_color: "dadce0",
    username_color: "137980",
  },
  "catppuccin-frappe": {
    title_color: "81c8be",
    text_color: "c6d0f5",
    icon_color: "ca9ee6",
    bg_color: "303446",
    stroke_color: "434962",
    username_color: "81c8be",
  },
  "catppuccin-macchiato": {
    title_color: "8bd5ca",
    text_color: "cad3f5",
    icon_color: "c6a0f6",
    bg_color: "24273a",
    stroke_color: "343854",
    username_color: "8bd5ca",
  },
  "catppuccin-mocha": {
    title_color: "94e2d5",
    text_color: "cdd6f4",
    icon_color: "cba6f7",
    bg_color: "1e1e2e",
    stroke_color: "2a2a40",
    username_color: "94e2d5",
  },
  vue: {
    title_color: "41b883",
    icon_color: "41b883",
    text_color: "273849",
    bg_color: "fffefe",
  },
  "vue-dark": {
    title_color: "41b883",
    icon_color: "41b883",
    text_color: "fffefe",
    bg_color: "273849",
  },
  github_dark: {
    title_color: "58A6FF",
    icon_color: "1F6FEB",
    text_color: "C3D1D9",
    bg_color: "0D1117",
    border_color: "39D353",
  },
  github_dark_dimmed: {
    title_color: "539BF5",
    icon_color: "539BF5",
    text_color: "ADBAC7",
    bg_color: "24292F",
    border_color: "373E47",
  },
  github_light: {
    title_color: "1F6FEB",
    icon_color: "39D353",
    text_color: "24292F",
    bg_color: "FFFFFF",
    border_color: "39D353",
  },
  "whatsapp-light": {
    title_color: "1DAB61",
    text_color: "131A20",
    icon_color: "858A8D",
    bg_color: "FFFFFF",
    border_color: "D8FDD2",
  },
  "whatsapp-dark": {
    title_color: "21C063",
    text_color: "F7F8FA",
    icon_color: "858A8D",
    bg_color: "0B141B",
    border_color: "103629",
  },
  buefy: {
    title_color: "7957D5",
    text_color: "363636",
    icon_color: "FF3860",
    border_color: "A8A8A8",
    bg_color: "FFFFFF",
  },
  "buefy-dark": {
    title_color: "7957D5",
    text_color: "ABABAB",
    icon_color: "FF3860",
    bg_color: "1A1B27",
  },
  "solarized-light": {
    title_color: "268bd2",
    icon_color: "b58900",
    text_color: "859900",
    bg_color: "fdf6e3",
    stroke_color: "fdf0ce",
  },
  "solarized-dark": {
    title_color: "268bd2",
    icon_color: "b58900",
    text_color: "859900",
    bg_color: "002b36",
    stroke_color: "004557",
  },
  "vision-friendly-dark": {
    title_color: "ffb000",
    icon_color: "785ef0",
    text_color: "ffffff",
    bg_color: "000000",
    stroke_color: "111919",
  },
  "deuteranopia-friendly-dark": {
    title_color: "f0e442",
    icon_color: "56b4e9",
    text_color: "009e73",
    bg_color: "000000",
    stroke_color: "cc79a7",
    username_color: "e69f00",
  },
  garden: {
    title_color: "D2DD3B",
    icon_color: "DDD4A8",
    text_color: "6FDD6C",
    bg_color: "094A4A",
    border_color: "000000",
    stroke_color: "095A5A",
  },
  shadow_red: {
    title_color: "9A0000",
    text_color: "545454",
    icon_color: "4F0000",
    border_color: "4F0000",
    bg_color: "ffffff00",
  },
  shadow_green: {
    title_color: "007A00",
    text_color: "545454",
    icon_color: "003D00",
    border_color: "003D00",
    bg_color: "ffffff00",
  },
  shadow_blue: {
    title_color: "00779A",
    text_color: "545454",
    icon_color: "004450",
    border_color: "004490",
    bg_color: "ffffff00",
  },
  shadow_orange: {
    title_color: "B45202",
    text_color: "545454",
    icon_color: "733C00",
    border_color: "733C00",
    bg_color: "ffffff00",
  },
  shadow_purple: {
    title_color: "6F42C1",
    text_color: "545454",
    icon_color: "570182",
    border_color: "570182",
    bg_color: "ffffff00",
  },
  shadow_brown: {
    title_color: "755F3E",
    text_color: "545454",
    icon_color: "31312D",
    border_color: "31312D",
    bg_color: "ffffff00",
  },
  gruvbox: {
    title_color: "fabd2f",
    icon_color: "fe8019",
    text_color: "8ec07c",
    bg_color: "282828",
    stroke_color: "3c3836",
    username_color: "ebdbb2",
  },
  gruvbox_light: {
    title_color: "b57614",
    icon_color: "af3a03",
    text_color: "427b58",
    bg_color: "fbf1c7",
    stroke_color: "ebdbb2",
    username_color: "3c3836",
  },
  apprentice: {
    title_color: "ffffff",
    icon_color: "ffffaf",
    text_color: "bcbcbc",
    bg_color: "262626",
    username_color: "ffffaf",
  },
  radical: {
    title_color: "fe428e",
    icon_color: "f8d847",
    text_color: "a9fef7",
    bg_color: "141321",
  },
  tokyonight: {
    title_color: "89ddff",
    icon_color: "bb9af7",
    text_color: "1abc9c",
    bg_color: "1a1b26",
    stroke_color: "545c7e",
    username_color: "9d7cd8",
  },

  // Gradient themes
  "sunset-gradient": {
    title_color: "FFFFFF",
    text_color: "FFFFFF",
    icon_color: "FFFFFF",
    border_color: "850000",
    bg_color: "45,8A2386,E94056,F27120",
  },
  "ocean-gradient": {
    title_color: "FFFFFF",
    text_color: "FFFFFF",
    icon_color: "FFFFFF",
    border_color: "000155",
    bg_color: "90,0093EA,80D0C8,80D0C8",
  },
  "ambient-gradient": {
    title_color: "FFFFFF",
    text_color: "FFFFFF",
    icon_color: "FFFFFF",
    border_color: "AE58A1",
    bg_color: "35,4158D0,C850C0,FFCC70",
  },
  "siny-gradient": {
    title_color: "FFFFFF",
    text_color: "FFFFFF",
    icon_color: "FFFFFF",
    bg_color: "30,E96443,904E95",
  },
}
