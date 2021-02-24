# botrest
![version](https://img.shields.io/badge/version-1.0.0-brightgreen) ![version](https://img.shields.io/badge/env-node-red) 

api-rest for bot development

## introduction

this is an axio-based repository for requesting endpoints that use cookies for data authentication and website scraping.

## usage

to use, import the modules using an ``npm install botrest --save`` and import into your project.

```js
const botrest = require('botrest');
/* insert the base url to make the request (in the header field, insert the authentication parameters and or tokens. If not, add a null value: botrest('baseURL', {headers})*/ 
const rest = new botrest('https://iqoption.com/', null)
//get('/endpoint', {querystring: null})
rest.get('/api/appinit', null).then(rest => {
    console.log(rest)
})
```

## suport

the system currently supports requests in POST and GET methods

>- NOTE: if the endpoints do not use body and or query, consider entering a null value: ``get('/endpoint', null)`` - ``post('/endpoint', null, null)``
```js
rest.get('/endpoint', {query: 'string'})

rest.post('/endpoint', {body: 'string'}, {query: 'string'})
```

## Form Data

POST and GET formData methods are used to return absolute values ​​of requests made.

these values ​​can be filled with:

- endpoint
- body
- query
- header
- encoding

```js

rest.getFormData('/endpoint', {query: 'string'}, {header: 'string'}, 'utf8')

rest.postFormData('/endpoint', {query: 'string'}, {body: 'string'}, {header: 'string'}, 'utf8')
```

## extra

some extra functions used are:
- return of cookies
- definition of agents

```js
var cookie = rest.cookie()
console.log(cookie)
/* To use the agent definition, it is necessary to enter a numeric value. If this value is null, it will return a random agent: agtController('any') or agtController(2)*/
var agt = rest.agtController('any')
console.log(agt)

```
