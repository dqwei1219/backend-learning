const http = require('http')

// req = incoming request object with all info
// res = response we are sending back
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("this is our home directory")
    }
})

server.listen(5000)
