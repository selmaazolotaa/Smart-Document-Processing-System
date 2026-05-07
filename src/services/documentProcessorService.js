import { extractText } from "../parsers/parserFactory.js";

export const processDocument = async (file) => {
  const text = await extractText(file);

  return {
    rawText: text,
  };
};