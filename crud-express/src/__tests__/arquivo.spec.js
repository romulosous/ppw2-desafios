const request = require('supertest')
const app = require('../app')
const { validate } = require('uuid')

describe('Cursos', () => {
  it('should be able to create a new repository', async () => {
    const response = await request(app)
      .post('/cursos')
      .send({
        name: 'PPW',
        teacher: 'Jesiel',
        hours: '80'
      })

    console.log(response.body)

    expect(validate(response.body.id)).toBe(true)

    expect(response.body).toMatchObject({
      name: 'PPW',
      teacher: 'Jesiel',
      hours: '80'
    })
  })
})
