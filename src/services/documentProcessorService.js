import { extractText } from "../parsers/parserFactory.js";
import { extractFields } from "../extractors/fieldExtractor.js";
import { validateDocument } from "../validators/documentValidator.js";

export const processDocument = async (file) => {
  const text = await extractText(file);
  const extractedData = extractFields(text);
  const validationErrors = validateDocument(extractedData);

  return {
    rawText: text,
    extractedData,
    validationErrors,
  };
};