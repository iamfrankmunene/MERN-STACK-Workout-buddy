const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController')
const router = express.Router()


//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getSingleWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a new workout
router.delete('/:id', deleteWorkout)

//UPDATE a new workout
router.patch('/:id', updateWorkout)

module.exports = router