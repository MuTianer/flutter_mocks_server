module.exports = [
  // login
  {
    id: "xxx", // route id
    method: ["GET", "POST", "PUT", "PATCH"], // HTTP methods
    url: "/xxx/login", // url in express format
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: {
            "xxx": "mock_xxx"
          }, // body to send
        },
      },
    ],
  },
  {
    id: "proxy-all", // Proxy all requests
    url: "*",
    method: ["GET", "POST", "PATCH", "PUT"],
    variants: [
      {
        id: "real-api",
        type: "proxy", // This route variant will use the "proxy" handler
        options: {
          host: "http://127.0.0.1:8080", // proxy host
        },
      },
    ],
  },
];
