const functions = require('firebase-functions');

function sendPushFn(req,res){
  var payload = {
  notification: {
      title: req.body.title,
      body: req.body.message
  }
  };    
  friApp.messaging().sendToDevice(req.body.token,payload)
  .then(response=> {
      // See the MessagingDevicesResponse reference documentation for
      // the contents of response.
      console.log("Successfully sent message:", response);
     // response.end()
      res.end()
  })
  .catch(error=> {
      //res.end();        
      console.log("Error sending message:", error);
  });    
 // res.end();
  
}
exports.sendPush= functions.https.onRequest((req, res)=> {
  var corsFn = cors();
  corsFn(req, res, function() {
      sendPushFn(req, res);
  }); 
});