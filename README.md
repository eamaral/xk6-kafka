# Load Test K6 & Load Test K6 in Kafka 

Este projeto exemplifica como implementar testes de carga usando k6, uma popular ferramenta de teste de desempenho, e como integrar esses testes com o Apache Kafka, um sistema de mensageria distribuída, para simular cenários de carga em aplicações que utilizam Kafka para processamento de mensagens em tempo real.

## Pré-requisitos para Load test com K6

- Instalar o k6 - [k6 installation guide](https://k6.io/docs/get-started/installation/)

- Comando para execução do script - $ ./k6 run loadtest_ms_script.js

## Pré-requisitos para Load test com K6 no Kafka

- Instalar o k6 - [k6 installation guide](https://k6.io/docs/get-started/installation/)

- Instalar o GO - [GVM](https://github.com/moovweb/gvm#installing)

- Instalar xk6 - $ go install go.k6.io/xk6/cmd/xk6@latest

- Buildar xk6 - $ xk6 build --with github.com/mostafa/xk6-kafka@latest && xk6 build --with github.com/mostafa/xk6-kafka@bb0ceb8

- Comando para execução do script - $ ./k6 run loadtest_kafka_script.js