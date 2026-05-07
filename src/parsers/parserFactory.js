import { parseTxt } from "./txtParser.js";
import { parseCsv } from "./csvParser.js";

export const extractText = async (file) => {
  switch (file.mimetype) {
    case "text/plain":
      return parseTxt(file.path);

    case "text/csv":
    case "application/vnd.ms-excel":
      return parseCsv(file.path);

    default:
      throw new Error("Unsupported file type");
  }
};