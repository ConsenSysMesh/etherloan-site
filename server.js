var express = require("express"),
    path = require('path'),
    app = express();



app.use(express.static(path.join(__dirname, 'dist')));

var sendApp=function(req, res) {
    res.sendfile('./dist/index.html');
}

//app.get('/sign', sendApp );

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log("App served at: http://localhost:"+app.get('port'));
});
