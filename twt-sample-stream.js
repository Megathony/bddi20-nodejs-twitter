const http = require("https")

const TWT_API_HOST = "api.twitter.com"
const TWT_API_PATH = "/2/tweets/sample/stream"
const BEARER_TOKEN = ""

const options = {
  host: TWT_API_HOST,
  path: TWT_API_PATH,
  method: "GET",
  headers: {
    Authorization: "Bearer " + BEARER_TOKEN
  }
}

const req = http.request(options, (res) => {
  res.on('data', (chunk) => {
    console.log("data: ", chunk.toString())
  })
})

req.on('error', (error) => {
  console.error(error)
})

req.end()
