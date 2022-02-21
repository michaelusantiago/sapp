const data = JSON.stringify({
     id: 1234,
     method: 'app.broadcast',
     accessToken: 'token',
     data: {
         event: 'eventFromExtension',
         data: [{name: 'Lebron James', age: 37}]
     }
})

const parsed = JSON.parse(data)
const detail = parsed.data.data
console.log(parsed)
