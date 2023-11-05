import express from 'express'
import mongoose from 'mongoose'
import { RiskToleranceModel } from '../models/RiskTolerance'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const response = await RiskToleranceModel.find()
    res.json(response)
  } catch (error) {
    res.json(error)
  }
})

export { router as toleranceRouter }
