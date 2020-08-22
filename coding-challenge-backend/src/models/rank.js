import mongoose, { Schema } from "mongoose";

const RankSchema = new Schema({
  score: Number,
  lang: String,
  applyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Apply' },
  user: {
    _id: mongoose.Types.ObjectId,
    userid: String,
    username: String,    
    userstatus: String,
  },
});

const Rank = mongoose.model("Rank", RankSchema);
export default Rank;
