import mongoose from 'mongoose'

const RiskToleranceSchema = new mongoose.Schema({
  score: { type: Number, required: true },
  stocks: [{ title: String, value: Number }],
})

export const RiskToleranceModel = mongoose.model(
  'tolerance',
  RiskToleranceSchema
)
