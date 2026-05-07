import fs from "fs/promises";

export const parseCsv = async (filePath) => {
  const text = await fs.readFile(filePath, "utf-8");

  return text;
};