'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/function', express.static(__dirname + '/function'));
app.use('/components', express.static(__dirname + '/components'));
app.use('/static', express.static(__dirname + '/static'));

http.listen(process.env.PORT || 3000, function() {
    console.log('listening on *:3000');
});

<<<<<<< HEAD
// 用於處理路徑
var path = require('path')

// import 同目錄的 eventEmitter.js
var eventEmitter = require('./eventEmitter.js')

// import 同目錄的 web3.js
var web3 = require('./web3.js')
var eth = web3.eth

// import 同目錄的 bank
var BumbCase = require('./BumbCase.js')



app.get('/userdata', function(req, res){
    var user = req.query.id
        BumbCase.returnid({
                      from:user
                      },function(err, rid){
                      if(!err){
                      BumbCase.returnrecordNum({
                                           from:user
                                           },function(err,rrecordNum){
                                           if(!err){
                                           BumbCase.returnmyPlate({
                                                              from:user
                                                              },function(err,rmyPlate){
                                                              if(!err){
                                                              BumbCase.returnotherPlate({
                                                                                    from:user
                                                                                    },function(err,rotherPlate){
                                                                                    if(!err){
                                                                                    BumbCase.returncondition({
                                                                                                         from:user
                                                                                                         },function(err,rcondition){
                                                                                                         if(!err){
                                                                                                         BumbCase.returndate({
                                                                                                                         from:user
                                                                                                                         },function(err,rdate){
                                                                                                                         if(!err){
                                                                                                                         BumbCase.returntime({
                                                                                                                                         from:user
                                                                                                                                         },function(err,rtime){
                                                                                                                                         if(!err){
                                                                                                                                         BumbCase.returnplace({
                                                                                                                                                          from:user
                                                                                                                                                          },function(err,rplace){
                                                                                                                                                          if(!err){
                                                                                                                                                          BumbCase.returnotherBehavior({
                                                                                                                                                                                   from:user
                                                                                                                                                                                   },function(err,rotherBehavior){
                                                                                                                                                                                   if(!err){
                                                                                                                                                                                   BumbCase.returnmyBehavior({
                                                                                                                                                                                                         from:user
                                                                                                                                                                                                         },function(err,rmyBehavior){
                                                                                                                                                                                                         if(!err){
                                                                                                                                                                                                         BumbCase.returnspeed({
                                                                                                                                                                                                                          from:user
                                                                                                                                                                                                                          },function(err,rspeed){
                                                                                                                                                                                                                          if(!err){
                                                                                                                                                                                                                          BumbCase.returnroad({
                                                                                                                                                                                                                                          from:user
                                                                                                                                                                                                                                          },function(err,rroad){
                                                                                                                                                                                                                                          if(!err){
                                                                                                                                                                                                                                          BumbCase.returnsign({
                                                                                                                                                                                                                                                          from:user
                                                                                                                                                                                                                                                          },function(err,rsign){
                                                                                                                                                                                                                                                          if(!err){
                                                                                                                                                                                                                                                          BumbCase.returnbroken({
                                                                                                                                                                                                                                                                            from:user
                                                                                                                                                                                                                                                                            },function(err,rbroken){
                                                                                                                                                                                                                                                                            if(!err){
                                                                                                                                                                                                                                                                            BumbCase.returnotherCond({
                                                                                                                                                                                                                                                                                                 from:user
                                                                                                                                                                                                                                                                                                 },function(err,rotherCond){
                                                                                                                                                                                                                                                                                                 if(!err){
                                                                                                                                                                                                                                                                                                 BumbCase.returnphoto({
                                                                                                                                                                                                                                                                                                                  from:user
                                                                                                                                                                                                                                                                                                                  },function(err,rphoto){
                                                                                                                                                                                                                                                                                                                  if(!err){
                                                                                                                                                                                                                                                                                                                  BumbCase.returnnotes({
                                                                                                                                                                                                                                                                                                                                   from:user
                                                                                                                                                                                                                                                                                                                                   },function(err,rnotes){
                                                                                                                                                                                                                                                                                                                                   if(!err){
                                                                                                                                                                                                                                                                                                                                   res.json({
                                                                                                                                                                                                                                                                                                                                            id: rid,
                                                                                                                                                                                                                                                                                                                                            recordNum: rrecordNum,
                                                                                                                                                                                                                                                                                                                                            identity:{
                                                                                                                                                                                                                                                                                                                                            myPlate: rmyPlate,
                                                                                                                                                                                                                                                                                                                                            otherPlate: rotherPlate
                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                            condition:{
                                                                                                                                                                                                                                                                                                                                            date: rdate,
                                                                                                                                                                                                                                                                                                                                            time: rtime,
                                                                                                                                                                                                                                                                                                                                            place: rplace,
                                                                                                                                                                                                                                                                                                                                            otherBehavior: rotherBehavior,
                                                                                                                                                                                                                                                                                                                                            myBehavior: rmyBehavior,
                                                                                                                                                                                                                                                                                                                                            speed: rspeed
                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                            extFactor:{
                                                                                                                                                                                                                                                                                                                                            road: rroad,
                                                                                                                                                                                                                                                                                                                                            sign: rsign
                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                            result:{
                                                                                                                                                                                                                                                                                                                                            broken: rbroken,
                                                                                                                                                                                                                                                                                                                                            otherCond: rotherCond
                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                            otherData:{
                                                                                                                                                                                                                                                                                                                                            photo: rphoto,
                                                                                                                                                                                                                                                                                                                                            notes: rnotes
                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                   })
                                                                                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                                                                                   })
                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                  })
                                                                                                                                                                                                                                                                                                 }
                                                                                                                                                                                                                                                                                                 })
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                          })
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                          })
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                          })
                                                                                                                                                                                                         }
                                                                                                                                                                                                         })
                                                                                                                                                                                   }
                                                                                                                                                                                   })
                                                                                                                                                          }
                                                                                                                                                          })
                                                                                                                                         }
                                                                                                                                         })
                                                                                                                         }
                                                                                                                         })
                                                                                                         }
                                                                                                         })
                                                                                    }
                                                                                    })
                                                              }
                                                              })
                                           }
                                           })
                      }
                      })
        app.post('postdata',function(req,res){
                 var user = req.query.id
                 BumbCase.NewCase(user,req.query.myPlate,req.query.otherPlate,req.query.condition,req.query.date,req.query.time,req.query.place,req.query.otherBehavior,req.query.myBehavior,req.query.speed,req.query.road,req.query.sign,req.query.broken,req.query.otherCond,req.query.photo,req.query.notes,{
                                  from: user
                                  gas: 4600000
                                  },function(err, txhash){
                                  if(!err){
                                  eventEmitter.once('NewCaseEvent:' + user,function(eventPayload){
                                                    eventPayload['txhash'] = txhash
                                                    
                                                    res.json(eventPayload)
                                                    })
                                  }else{
                                    console.log(err)
                                    res.status(500).json(err)
                                  }
                                  })
                 
                 })
=======
exports = module.exports = app;
>>>>>>> dd81dfdac90df3773a528794d568c63c83a8f336
