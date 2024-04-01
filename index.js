var AWS = require('aws-sdk');
var uuid = require('node-uuid');

var s3 = new AWS.S3();

var bucketName = 'test-' + uuid.v4();

var keyName = 'hello_world.txt';

s3.createBucket({Bucket: bucketName}, function() {
    var params = {Bucket: bucketName, Key: keyName, Body: 'Hello Mahendra!'};
    s3.putObject(params, function(err, data) {
      if (err)
        console.log(err)
      else
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
    });
    localStorage.setItem('')
  });

s3.deleteBucket({Bucket:bucketName});