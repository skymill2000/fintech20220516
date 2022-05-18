var jwt = require('jsonwebtoken');
const token = jwt.sign(
    {
        data: 'foobar'
    },
    'fefasdfas', //secretkey
    { expiresIn: '1h' }
);
console.log(token);

jwt.verify(
    token, 
    'fefasdfas', //secretkey
    function(err, decoded) {
        console.log(err);
        console.log(decoded) // bar
    }
);
  
