import { check } from 'k6';
import { writer, produce } from 'k6/x/kafka';
import { SharedArray } from "k6/data";

export let options = {
  duration: '10s',
  vus: 3,
};

const bootstrapServers = ['brokers'];
const kafkaTopic = 'topic_name';

const producer = writer(bootstrapServers, kafkaTopic);

const Data = new SharedArray('Ler dados', function(){
  return JSON.parse(open('./idOpenFinance.json')).id;
});

const Partition = new SharedArray('Ler dados', function(){
  return JSON.parse(open('./partition.json')).id;
});

export default function () {
  const identification_number = Data[Math.floor(Math.random() * Data.length)].document;
  const data = {
    "body": {
      "id": identification_number
      },
  }

  const partition = Partition[Math.floor(Math.random() * Partition.length)].partition;

  let messages = [
    {
      value: JSON.stringify(data),
      headers: {},
      partition: partition 
    },
  ];

  const error = produce(producer, messages);
  check(error, {
    'is sent': (err) => err == undefined,
  });

}