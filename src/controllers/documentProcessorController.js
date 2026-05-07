import { processDocument } from "../services/documentProcessorService.js";

export const handleUpload = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const result = await processDocument(req.file);

    res.json({
      message: "Processed successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};