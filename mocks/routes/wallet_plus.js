module.exports = [
  // login
  {
    id: "wallet-plus", // route id
    method: ["GET", "POST", "PUT", "PATCH"], // HTTP methods
    url: "/ibank-api_local/noa/auth/login", // url in express format
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: {
            msgList: [],
            status: 0,
            errorCause: 0,
            errorLocation: 0,
            errorBankId: '0177',
            authToken: '123456789012345678901234567890',
            lastLoginAt: '2020-01-01T00:00:11',
            passcodeSetting: '1',
            touchidSetting: '1',
            passcodeNumber: '001001',
            acountCertifielLimit: null,
          }, // body to send
        },
      },
    ],
  },
  // cotra test
  {
    id: "cotra-1", // route id
    method: ["GET", "POST", "PUT", "PATCH"], // HTTP methods
    url: "/ibank-api_local/cotra/login", // url in express format
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: {
            msgList: [],
            status: 0,
            errorCause: 0,
            errorLocation: 0,
            errorBankId: '0177',
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
