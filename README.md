# flutter_mocks_server
flutter_mocks_server

# run mock server comment
npm run mocks

# How to add mock data

## 1.Refer to the example and add the data and URLs you need to mock to the array in the mock_api.js file.
## 2.After adding it to mock_api.js, append the 'id' from the options you added to 'collections.js' under 'mock_api => routes'.
## 3.cmd `npm run mocks`

## 4.When mock data is present in mock_api.js, the server will directly return the mock data.When there is no mock data corresponding to the URL in mock_api.js, I will proxy the HTTP request to localhost:8080