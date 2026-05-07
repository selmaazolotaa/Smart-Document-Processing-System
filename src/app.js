import express from "express";
import cors from "cors";
import uploadRoutes from "./routes/upload.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", uploadRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

