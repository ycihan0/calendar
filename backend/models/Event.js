const mongoose = require("mongoose");

const EventSchema = mongoose.Schema(
  {
    userId:{ type: String, required: true },
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String},
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;