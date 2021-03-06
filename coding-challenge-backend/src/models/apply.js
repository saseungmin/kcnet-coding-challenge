import mongoose from 'mongoose';

const { Schema } = mongoose;

const ApplySchema = new Schema({
  applystartday: String,
  applyendday: String,
  teststartday: String,
  testendday: String,
  title: String,
  content: String,
  langs: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

const Apply = mongoose.model('Apply', ApplySchema);
export default Apply;
