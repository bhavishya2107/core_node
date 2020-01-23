7. // Write respective headers object below.
//Request from browser `https://altcampus.io` and copy request, response and general headers into answer.js

//General Header
// Request URL: https://altcampus.io/
// Request Method: GET
// Status Code: 200 
// Remote Address: 128.199.85.71:443
// Referrer Policy: no-referrer-when-downgrade

//Response Headers
// access-control-allow-credentials: true
// access-control-allow-origin: *
// access-control-expose-headers: 
// cache-control: max-age=0, private, must-revalidate
// content-encoding: gzip
// content-type: text/html; charset=utf-8
// date: Wed, 08 Jan 2020 17:14:24 GMT
// server: nginx/1.10.3 (Ubuntu)
// status: 200
// x-content-type-options: nosniff
// x-content-type-options: nosniff
// x-download-options: noopen
// x-frame-options: SAMEORIGIN
// x-frame-options: DENY
// x-permitted-cross-domain-policies: none
// x-request-id: 2njvhe14lv8tlhi07000idf1
// x-xss-protection: 1; mode=block

//Request Headers
// :authority: altcampus.io
// :method: GET
// :path: /
// :scheme: https
// accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
// accept-encoding: gzip, deflate, br
// accept-language: en-US,en;q=0.9,ru;q=0.8,la;q=0.7
// cache-control: no-cache
// cookie: _ga=GA1.2.1419248.1575372277; track_uid=aef27c04-cc43-3e18-6fe9-f1ece4810175; _altcampus_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYNTNkM0cyTXg1RHlUR3FhRklURWgyZz09.5GE5leFzrRPZ5pUIhxkwLi_ycXb3CioVgcC1fmpclUA; _gid=GA1.2.547681455.1578503593
// pragma: no-cache
// sec-fetch-mode: navigate
// sec-fetch-site: none
// sec-fetch-user: ?1
// upgrade-insecure-requests: 1
// user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36





8. // Write parsed object below of the url ``http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4

const url = require('url')
const qs = require('querystring')
const adr = 'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4'
const parsedObj = url.parse(adr, true)
const parsedQuery = qs.parse(parsedObj.search)
console.log(parsedObj)
console.log(parsedQuery)


9. // Write parsed query object
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:3000',
//     port: '3000',
//     hostname: 'localhost',
//     hash: null,
//     search: '?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     query: [Object: null prototype] {
//       token: '8372fcb8y2874b2t478t6t48cbtbc72t4'
//     },
//     pathname: '/api/v3',
//     path: '/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     href: 'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4'
//   }