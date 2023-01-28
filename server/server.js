const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://vahid:6OLO0N7hxiXeGidu@nft.2kztrup.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => console.log("connected to database"));

let ServicesSchema = new mongoose.Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
});

let Services = mongoose.model("Services", ServicesSchema);

app.get("/api/services", async (req, res) => {
  let services = await Services.find({});
  res.send(services);
});

app.get("/api/services/:id", async (req, res) => {
  let { id } = req.params;
  let serviceTarget = await Services.findById(id);
  res.send(serviceTarget);
});

app.delete("/api/services/:id", async (req, res) => {
  let { id } = req.params;
  let deletedService = await Services.findByIdAndDelete(id);
  res.send(deletedService);
});

app.post("/api/services", async (req, res) => {
  let newService = Services({ ...req.body });
  await newService.save();
  res.status(201).send({ message: "created", service: newService });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
