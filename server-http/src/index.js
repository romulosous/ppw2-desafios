const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method

  if (method == 'GET' && url == '/') {
    res.statusCode = 200
    res.end('<h1>Home</h1>')
  } else if (method === 'GET' && url == '/cursos') {
    res.statusCode = 200
    res.end('<h1>Rota Cursos</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>Pagina nao encontrada!</h1>')
  }
})

server.listen(3333, () => {
  console.log('Server running!!!')
})
