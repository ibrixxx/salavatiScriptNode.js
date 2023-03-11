const axios = require('axios');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
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
          res.send('Success');
        })
        .catch(error => {
          console.log(error);
          res.send('Error');
        });
    })
    .catch(error => {
      console.log(error);
      res.send('Error');
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});