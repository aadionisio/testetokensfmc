var axios = require('axios');


async function getToken() {
  const res = await axios.post('https://xxxxxxxxxxx.auth.marketingcloudapis.com/v2/token'
    , {
      grant_type: "client_credentials", client_id: "xxxxxxxxxxxxxxxx",
      client_secret: "xxxxxxxxxxxxxx"
    });

  return await res;


  // const token_data = response.data;

  // console.log(token_data);
  //  token_data;
}

try {
  var access_token;
  getToken().then(function (response) {
    access_token = response.data.access_token;

    console.log(access_token);

    axios.get('https://xxxxxxxxx.rest.marketingcloudapis.com/data/v1/customobjectdata/key/xxxxxxxxxxxxxxxxx/rowset?$filter=email%20eq%20"rafael.santos_dextra%40prestador.globo"%20and%20nome%20eq%20"Rafael%20Santos"'
      , { headers: { Authorization: `Bearer ${access_token}` } }).then(function (response2) {
        console.log(response2.data);
      });

  })


} catch (error) {
  console.log(error);
}
