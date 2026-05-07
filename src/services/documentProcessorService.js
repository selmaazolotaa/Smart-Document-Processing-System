import { extractText } from "../parsers/parserFactory.js";
import { extractFields } from "../extractors/fieldExtractor.js";

export const processDocument = async (file) => {
  const text = await extractText(file);
  const extractedData = extractFields(text);

  return {
    rawText: text,
    extractedData,
  };
};