import mongoose from "mongoose";
const notesSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Number,
  userId: String,
});
export const Notes = mongoose.model("Summary", notesSchema);
