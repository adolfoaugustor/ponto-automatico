const cron = require('node-cron');
const EventEmitter = require('events');
const ponto = require('./requestPoint.js');
const event = new EventEmitter();

console.log('Cron ponto Basis...');

// Make your callback function asynchronous so that you can use await
async function doSomething() {
    console.log('Iniciando...');
    console.log(new Date().toLocaleString());
    return ponto.baterPonto();
}

const task1 = cron.schedule('1 10 9 * * *', async () => {
    console.log('Entrada 1!');
    let st = await doSomething();
    event.emit('Ponto 1 registrado... '+` ${st}`);
});
// execução de entrada 1 completada
event.on('Cron de entrada completo', () => {
    console.log('Finalizado!');
    task1.stop();
});

const task2 = cron.schedule('2 00 12 * * *', async () => {
    console.log('Saída 1!');
    let st = await doSomething();
    event.emit('Saída 1 registrado... '+` ${st}`);
});
// JOB COMPLETED exit 2 event is emitted and stop the task2
event.on('Cron de Saída completo', () => {
    console.log('Finalizado...');
    task2.stop();
});

const task3 = cron.schedule('2 0 13 * * *', async () => {
    console.log('Entrada 2');
    let st = await doSomething();
    event.emit('Entrada 2 registrado... '+` ${st}`);
});
// JOB COMPLETED Start 2 event is emitted and stop the task3
event.on('Cron de Entrada completo 2', () => {
    console.log('Finalizado!');
    task3.stop();
});

const task4 = cron.schedule('1 10 18 * * *', async () => {
    console.log('Saída 2');
    let st = await doSomething();
    event.emit('Saída 2 registrado... '+` ${st}`);
});
// JOB COMPLETED exit 4 event is emitted and stop the task3
event.on('Cron de Saída completo', () => {
    console.log('Finalizado!');
    task4.stop();
});