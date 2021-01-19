const http = require("https")

const TWT_API_HOST = "reqres.in"
const TWT_API_PATH = "/api/users?page=2"

const options = {
  host: TWT_API_HOST,
  path: TWT_API_PATH,
  method: "GET",
  headers: {
  }
}

const req = http.request(options, (res) => {
  let data = ""
  res.on('data', (chunk) => {
    // console.log("data: ", chunk.toString())
    data += chunk
  })

  res.on("end", () => {
    console.log("data: ", data)
  })
})

req.on('error', (error) => {
  console.error(error)
})

req.end()
