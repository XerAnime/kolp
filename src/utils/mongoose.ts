import mongoose from "mongoose";

import { MONGO_URI, DATABASE } from "@/config";

const connectMongo = async () =>
  mongoose.connect(MONGO_URI as string, { dbName: DATABASE });

export default connectMongo;
