module.exports = [
    {
        "id": "base",
        "routes": [
            "add-headers:enabled",
            "get-users:success",
            "get-user:success"
        ]
    },
    {
        "id": "mock-api",
        "from": "base",
        "routes": [
            // custom api mock
            "xxx:success",
            // proxy function
            "proxy-all:real-api"
        ]
    }
];