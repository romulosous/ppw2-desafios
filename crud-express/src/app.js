const express = require('express')
const { v4: uuid } = require('uuid')

const app = express()

app.use(express.json())

const courses = []

app.get('/cursos', (request, response) => {
  return response.json(courses)
})

app.post('/cursos', (request, response) => {
  const { name, teacher, hours } = request.body

  const course = {
    id: uuid(),
    name,
    teacher,
    hours
  }

  courses.push(course)

  return response.json({ course })
})

app.put('/cursos/:id', (request, response) => {
  const { name, teacher, hours } = request.body
  const { id } = request.params

  const courseIndex = courses.findIndex(course => course.id === id)

  if (courseIndex < 0) {
    return response.status(400).json({ error: 'course not found' })
  }

  const course = {
    id,
    name,
    teacher,
    hours
  }

  courses[courseIndex] = course

  return response.json(course)
})

app.delete('/cursos/:id', (request, response) => {
  const { id } = request.params

  const courseIndex = courses.findIndex(course => course.id === id)

  if (courseIndex < 0) {
    return response.status(400).json({ error: 'course does not exists.' })
  }

  courses.splice(courseIndex, 1)
  return response.json({ message: 'Course  successfully removed' })
})

module.exports = app
