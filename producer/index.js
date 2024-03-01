const kafka = require('kafka-node');

const client = new kafka.KafkaClient({kafkaHost:'127.0.0.1:9092'});

//producer 
var producer = new kafka.Producer(client)

producer.on('ready', function(){
    let i=1;
   // setInterval(function(){
        producer.send([
            {
                topic:'test',
                messages: 'mensaje nuevo'
            }
        ], function(err,data){
            console.log('----enviado')
            console.log('error', err);
            console.log('data', data) 
        })
        i++;
 //   },2000)
})