# flutter_mocks_server
flutter_mocks_server

# run mock server comment
npm run mocks

# How to add mock data

## 1.Refer to the example and add the data and URLs you need to mock to the array in the wallet_plus.js file.
## 2.After adding it to wallet_plus.js, append the 'id' from the options you added to 'collections.js' under 'wallet-plus-mock-api => routes'.
## 3.cmd `npm run mocks`

## 4.When mock data is present in wallet_plus.js, the server will directly return the mock data.When there is no mock data corresponding to the URL in wallet_plus.js, I will proxy the HTTP request to localhost:8080