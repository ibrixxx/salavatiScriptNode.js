const axios = require('axios');

axios.get('https://joja.fly.dev/api/collections/numbers/records/36e28qg9qkda4ws')
  .then(response => {
    console.log(response.data);
    const data = {
      "salawatsPerDay": response.data.salawatsPerDay,
      "groupMembers": response.data.groupMembers,
      "allSalawats": response.data.allSalawats + response.data.salawatsPerDay
    };

    axios.patch('https://joja.fly.dev/api/collections/numbers/records/36e28qg9qkda4ws', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  })
  .catch(error => {
    console.log(error);
  });