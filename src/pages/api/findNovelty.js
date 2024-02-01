import Novelty from ".././models/novelty";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const handleError = (res, err) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

const font = async (req, res) => {
  try {
    if (req.method === "GET") {
      const products = await Novelty.find();
      res.status(200).json(products);
    }
  } catch (err) {
    handleError(res, err);
  }
};

export default font;
