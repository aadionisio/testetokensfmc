var axios = require('axios');



// axios.get('https://mc3w1yx46mrt3v9tcw-ccr5m028m.auth.marketingcloudapis.com/v2/token'
// , headers: { Authorization: `Bearer ${token}` } ).then(function (response) {
//   console.log(response.data.access_token);
// });

async function getToken() {
  const res = await axios.post('https://mc3w1yx46mrt3v9tcw-ccr5m028m.auth.marketingcloudapis.com/v2/token'
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

    axios.get('https://mc3w1yx46mrt3v9tcw-ccr5m028m.rest.marketingcloudapis.com/data/v1/customobjectdata/key/AD3ABBAA-1AC1-4CE5-845E-C78C101CF2BA/rowset?$filter=email%20eq%20"rafael.santos_dextra%40prestador.globo"%20and%20nome%20eq%20"Rafael%20Santos"'
      , { headers: { Authorization: `Bearer ${access_token}` } }).then(function (response2) {
        console.log(response2.data);
      });

  })


} catch (error) {
  console.log(error);
}
