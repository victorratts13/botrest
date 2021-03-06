const axios = require("axios").default;
const qs = require("qs");
const axiosCookieSuport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
const { agents, agentsAll } = require('./controllers/agentController');

var headers = {
    //"Host": "www.bet365.com",
    "Connection": "keep-alive",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36",
    "Content-type": "application/x-www-form-urlencoded",
    "Accept": "*/*",
    "X-Requested-With": "XMLHttpRequest",
    //"Cache-Control": "no-cache",
    //"Origin": "https://www.bet365.com",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    //"Referer": "https://www.bet365.com/",
    //"Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
};

axiosCookieSuport(axios);
const cookieJar = new tough.CookieJar();
let apiCookie = { withCredentials: true, jar: cookieJar };



class botrest {
    constructor(baseUrl, header) {
        this.baseUrl = baseUrl;
        this.header = header;
        this.axiosConfig = {
            baseURL: baseUrl,
            proxy: false,
            headers: (header == null ? headers : header),
            withCredentials: true,
            jar: cookieJar
        };

        this.api = axios.create(this.axiosConfig);
    }

    get(endpoint, query = {}, header = {}) {
        return new Promise((resolve, reject) => {
            axios.defaults.headers.post['Content-Type'] = (header["Content-type"] !== undefined ? header["Content-type"] : 'application/x-www-form-urlencoded');
            var conf = {
                "headers": (header == null ? headers : header),
                //"responseEncoding": (encoding == null ? 'utf8' : encoding),
                //"transformResponse": [data => data],
                "version": apiCookie.jar.version,
                "storeType": apiCookie.jar.storeType,
                "rejectPublicSuffixes": apiCookie.jar.rejectPublicSuffixes,
                "cookie": apiCookie.jar.cookie
            }
            var api = this.api
            var qr = qs.stringify(query);
            var uri = (query == null ? `${endpoint}` : `${endpoint}?${qr}`)
            api.get(uri, conf).then(rest => {
                return resolve(rest.data)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    getFormData(endpoint, query = {}, header = {}, encoding) {
        return new Promise((resolve, reject) => {
            axios.defaults.headers.post['Content-Type'] = (header["Content-type"] !== undefined ? header["Content-type"] : 'application/x-www-form-urlencoded');
            var conf = {
                "headers": (header == null ? headers : header),
                "responseEncoding": (encoding == null ? 'utf8' : encoding),
                "transformResponse": [data => data],
                "version": apiCookie.jar.version,
                "storeType": apiCookie.jar.storeType,
                "rejectPublicSuffixes": apiCookie.jar.rejectPublicSuffixes,
                "cookie": apiCookie.jar.cookie
            }
            var api = this.api
            var qr = qs.stringify(query);
            var uri = (query == null ? `${endpoint}` : `${endpoint}?${qr}`)
            api.get(uri, conf).then(rest => {
                return resolve(rest.data)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    post(endpoint, body = {}, query = {}, header = {}) {
        return new Promise((resolve, reject) => {
            axios.defaults.headers.post['Content-Type'] = (header["Content-type"] !== undefined ? header["Content-type"] : 'application/x-www-form-urlencoded');
            var conf = {
                "headers": (header == null ? headers : header),
                //"responseEncoding": (encoding == null ? 'utf8' : encoding),
                //"transformResponse": [data => data],
                "version": apiCookie.jar.version,
                "storeType": apiCookie.jar.storeType,
                "rejectPublicSuffixes": apiCookie.jar.rejectPublicSuffixes,
                "cookie": apiCookie.jar.cookie
            }
            var api = this.api
            var qr = qs.stringify(query);
            //var bd = body;
            var uri = (query == null ? `${endpoint}` : `${endpoint}?${qr}`)
            //conf.headers["Content-type"] = (header["Content-type"] == undefined ? conf.headers["Content-type"] : header["Content-type"] )
            api.post(uri, body, apiCookie).then(rest => {
                return resolve(rest.data)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    postFormData(endpoint, body = {}, query = {}, header = {}, encoding) {
        return new Promise((resolve, reject) => {
            axios.defaults.headers.post['Content-Type'] = (header["Content-type"] !== undefined ? header["Content-type"] : 'application/x-www-form-urlencoded');
            var conf = {
                "headers": (header == null ? headers : header),
                "responseEncoding": (encoding == null ? 'utf8' : encoding),
                "transformResponse": [data => data],
                "version": apiCookie.jar.version,
                "storeType": apiCookie.jar.storeType,
                "rejectPublicSuffixes": apiCookie.jar.rejectPublicSuffixes,
                "cookie": apiCookie.jar.cookie
            }
            var api = this.api
            var qr = qs.stringify(query);
            //var bd = body;
            var uri = (query == null ? `${endpoint}` : `${endpoint}?${qr}`)
            //conf.headers["Content-type"] = (header["Content-type"] == undefined ? conf.headers["Content-type"] : header["Content-type"] )
            //console.log(JSON.stringify(apiCookie))
            api.post(uri, body, conf).then(rest => {
                return resolve(rest.data)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    agtController(spt = null) {
        if (spt == 'any') {
            return agents();
        }else{
            return agentsAll(spt)
        }
    }

    cookie() {
        return apiCookie;
    }
}

module.exports = botrest;