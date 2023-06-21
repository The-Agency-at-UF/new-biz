const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaseStudySchema = new Schema({
    order: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

const CaseStudy = mongoose.model("CaseStudy", CaseStudySchema);

module.exports = CaseStudy;