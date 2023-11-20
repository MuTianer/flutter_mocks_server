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
        "id": "wallet-plus-mock-api",
        "from": "base",
        "routes": [
            // custom api mock
            "wallet-plus:success",
            "cotra-1:success",
            // proxy function
            "proxy-all:real-api"
        ]
    }
];