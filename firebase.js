const functions =require("firebase - functions")

const app =require('./server')

exports.app=functions.https.onrequest(app)
