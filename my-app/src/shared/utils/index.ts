export const getWidth = (width?: string) => {
  if (width?.includes("rem") || width?.includes("%")) return width;
  return "fit-content";
};
export const getHeight = (height?: string) => {
  if (height?.includes("rem") || height?.includes("%")) return height;
  return "fit-content";
};

export const capitalize = (text?: string) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
