let express = require('express')
const app = express()

app.get('/status', function (req, res) {
    res.send('Hello nodejs server')
})

app.get('/que1/:x', function (req, res) {
    let x = parseInt(req.params.x)
    x = x + x
    total = x.toString()
    res.send(total)
})

app.get('/que2/:x', function (req, res) {
    let x = parseInt(req.params.x)
    let isPrime = true

    if (x === 1) {
        res.send('1 is neither prime nor composite number.')
    } else if (x > 1) {
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                isPrime = false
                break;
            }
        }
        if (isPrime) {
            res.send(x.toString() + ' is a prime number')
        } else {
            res.send(x.toString() + ' is a not prime number')
        }
    } else {
        res.send('The number is not a prime number')
    }
})

let port = 8081

app.listen(port, function () {
    console.log('server running on ' + port)
})