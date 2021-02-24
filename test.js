const botrest = require('./index');

const rest = new botrest('https://iqoption.com/', null)

rest.get('/api/appinit', null).then(rest => {
    //console.log(rest)
})

var cookie = rest.cookie()

var agt = rest.agtController('any')

console.log(agt)