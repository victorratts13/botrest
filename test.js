const botrest = require('./index');
const qs = require('qs')

const rest = new botrest('https://members.bet365.com/', null)
var head = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Host': 'members.bet365.com',
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
    'Accept': '*/*',
    //'Origin': 'https://www.bet365.com',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    //'Referer': 'https://www.bet365.com/',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
}
rest.post('/members/lp/default.aspx', qs.stringify({
    txtType: '47',
    //txtLCNOVR: 'BR',
    //platform: '1',
    //IS: '11',
    txtUsername: '***',
    txtPassword: '***',
    //AuthenticationMethod: '0',
    //txtScreenSize: '1600 x 900'
}), null, head).then(rest => {
    console.log(rest)
}).catch(e => {
    console.log(e)
})

var cookie = rest.cookie()

var agt = rest.agtController('any')

//console.log(agt)