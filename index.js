const cron = require('node-cron');
const EventEmitter = require('events');
const ponto = require('./requestPoint.js');
const event = new EventEmitter();
const notifier = require('node-notifier');

console.log('________Registro de ponto: trabalhar_______');
async function doSomething() {
    console.log(new Date().toLocaleString() + ': __Hora__');
    return ponto.baterPonto();
}

const task1 = cron.schedule('1 55 08 * * *', async () => {
    console.log('__________Entrada 1 Bora Codar__________');
    let st = await doSomething();
    notifier.notify('__________Entrada 1 Bora Codar__________ '+st);
    event.emit(`Ponto 1 registrado... ${st}`);
});
event.on('Cron de entrada completo', () => {task1.stop()});

const task2 = cron.schedule('2 01 12 * * *', async () => {
    console.log('----------Saída 1 Almoço----------');
    let st = await doSomething();
    notifier.notify('----------Saída 1 Almoço---------- '+st);
    event.emit(`Saída 1 registrado... ${st}`);
});
event.on('Cron de Saída completo', () => {task2.stop()});

const task3 = cron.schedule('2 01 13 * * *', async () => {
    console.log('__________Entrada 2 Voltando___________');
    let st = await doSomething();
    notifier.notify('__________Entrada 2 Voltando___________ '+st);
    event.emit(`Entrada 2 registrado... ${st}`);
});
event.on('Cron de Entrada completo 2', () => {task3.stop()});

const task4 = cron.schedule('1 55 17 * * *', async () => {
    console.log('----------Saída 2 Vlw Tchau----------');
    let st = await doSomething();
    notifier.notify('----------Saída 2 Vlw Tchau---------- '+st);
    event.emit(`Saída 2 registrado... ${st}`);
});
event.on('Cron de Saída completo', () => {task4.stop()});