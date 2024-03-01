const kafka = require('kafka-node');

const client = new kafka.KafkaClient({kafkaHost:'localhost:9092'});

//consumer
var consumer = new kafka.Consumer(client,[{topic:'test'}])

consumer.on('ready', function () { console.log('client ready!') })

consumer.on('message', function(message){
    console.log('----recibido')
  //  let body =JSON.parse(message.value);
    console.log(message);

    return 'respuesta'
})
