'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the title of the job'
  },
  posted_date: {
    type: Date,
    default: Date.now
  },
  availability: {
    type: [{
      type: String,
      enum: ['Hourly', 'Part-time(20 hrs/wk)', 'Full-time(40 hrs/wk)']
    }],
    default: ['Hourly']
  },
  keyword: { type: [String], index: true },
  pay_rate: {
  type: [{
      type: Number,
      enum: []
    }],
    default: [10,20]
  }
});


module.exports = mongoose.model('Jobs', JobSchema);