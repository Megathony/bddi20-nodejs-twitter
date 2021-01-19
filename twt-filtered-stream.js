const http = require("https")
const { pipeline, Readable, Writable } = require("stream")

const TWT_API_HOST = "api.twitter.com"
const TWT_API_STREAM_PATH = "/2/tweets/search/stream?tweet.fields=attachments&expansions=attachments.media_keys&media.fields=url,preview_image_url"
const BEARER_TOKEN = ""

const options = {
  host: TWT_API_HOST,
  path: TWT_API_STREAM_PATH,
  method: "GET",
  headers: {
    Authorization: "Bearer " + BEARER_TOKEN
  }
}

const twtStream = new Readable({
  read() {}
})

const writeable = new Writable({
  write(chunk, _, callback) {
    console.log(chunk.toString())
    callback();
  }
})

const req = http.request(options, (res) => {
  res.on('data', (chunk) => {
    // console.log("data: ", chunk.toString())
    twtStream.push(chunk)
  })
})

req.on('error', (error) => {
  console.error(error)
})

req.end()

pipeline(
  twtStream,
  process.stdout,
  (err) => {
    console.error(err)
  }
)
