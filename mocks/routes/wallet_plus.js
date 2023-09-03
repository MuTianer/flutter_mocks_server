module.exports = [
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
            status: 1,
            errorCause: 0,
            errorLocation: 0,
            errorBankId: 177,
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
];
