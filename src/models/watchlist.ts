import { Schema, model, models } from "mongoose";

const WatchListSchema = new Schema(
  {
    userId: { type: String, required: true },
    listId: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    episode: { type: String, required: false },
    episodeId: { type: String, required: false },
  },
  { timestamps: true }
);

const WatchList = models.WatchList || model("WatchList", WatchListSchema);

export default WatchList;
