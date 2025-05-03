import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, default: ""},
});

export default mongoose.model("Tasks", DataSchema);
