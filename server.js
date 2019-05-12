const express = require('express')
const app  = express()
const port = process.env.PORT || 3000


app.get('/', (req,res)=>{
    res.send('hello server js')
})
app.get('/users',(req,res)=>{
    const data = [{
        "first_name": "Jon",
        "last_name": "McIlenna",
        "email": "jmcilenna0@prnewswire.com"
      }, {
        "first_name": "Madalena",
        "last_name": "Raincin",
        "email": "mraincin1@friendfeed.com"
      }, {
        "first_name": "Briana",
        "last_name": "McGreary",
        "email": "bmcgreary2@vk.com"
      }, {
        "first_name": "Abbe",
        "last_name": "Litherland",
        "email": "alitherland3@wikispaces.com"
      }, {
        "first_name": "Genovera",
        "last_name": "McCaighey",
        "email": "gmccaighey4@state.tx.us"
      }, {
        "first_name": "Giff",
        "last_name": "Chastaing",
        "email": "gchastaing5@uiuc.edu"
      }, {
        "first_name": "Ginni",
        "last_name": "Brackenridge",
        "email": "gbrackenridge6@networkadvertising.org"
      }, {
        "first_name": "Delly",
        "last_name": "Leversuch",
        "email": "dleversuch7@addtoany.com"
      }, {
        "first_name": "Shirl",
        "last_name": "Sydney",
        "email": "ssydney8@odnoklassniki.ru"
      }, {
        "first_name": "Del",
        "last_name": "Caston",
        "email": "dcaston9@shutterfly.com"
      }]
    res.json(data)

})

app.listen(port, ()=>{
    console.log(`server running port ${port}`)
})