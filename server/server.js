require('dotenv').config();

var restify = require('restify')
var server = restify.createServer()
var corsMiddleware = require('restify-cors-middleware')
var request = require('request')



function subscribe(req, res, next){
    var email = req.body.email;
    var firstName = req.body.firstName
    var dataCenter = process.env.DATACENTER
    var apiKey = process.env.APIKEY
    var audienceID = process.env.AUDIENCEID

    var options = {
        url: `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceID}/members`,
        method: 'POST',
        headers: { 'content-type': 'application/json', 'Authorization': `apikey ${apiKey}` },
        body: JSON.stringify({ email_address: email, full_name: firstName, status: 'subscribed' })
    }

    request(options, function(error, response, body){
        try {
            var respObj = {};
            if (response.statusCode === 200) {
                respObj = { success: `Subscribed using ${email} and ${firstName}!`, message: JSON.parse(response.body) };
            } else {
                respObj = { error: `Error trying to subscribe ${email}. Please use another email.`, message: JSON.parse(response.body) };
            }
            res.send(respObj)
        } catch(error) {
            var respErrorObj = { error: 'There was an error with your request', message: error.message };
            res.send(respErrorObj);
        }
    });
    next();
}
var cors = corsMiddleware({
    origin:['http://localhost:3000']
});

server.use(restify.plugins.bodyParser())

server.pre(cors.preflight)
server.use(cors.actual)
server.post('/subscribe', subscribe)
server.listen(8080, function(){
    console.log('listening on', server.name, server.url)
})