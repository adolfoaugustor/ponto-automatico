const cron = require('node-cron');
const EventEmitter = require('events');
const ponto = require('./requestPoint.js');
const event = new EventEmitter();

// Make your callback function asynchronous so that you can use await
async function doSomething() {
    console.log('Executando...');
    ponto.baterPonto();
    console.log(new Date().toLocaleString());
}

const task1 = cron.schedule('1 1 9 * * *', async () => {
    console.log('Running a task1 every minute');
    let st = await doSomething();
    event.emit('JOB COMPLETED Start 1'+` ${st}`);
});
// JOB COMPLETED Start 1 event is emitted and stop the task1
event.on('JOB COMPLETED Start 1', () => {
    console.log('Job done!');
    task1.stop();
});

const task2 = cron.schedule('2 01 12 * * *', async () => {
    console.log('Running a task2 every minute');
    let st = await doSomething();
    event.emit('JOB COMPLETED exit 1'+` ${st}`);
});
// JOB COMPLETED exit 2 event is emitted and stop the task2
event.on('JOB COMPLETED exit 1', () => {
    console.log('Job done!');
    task2.stop();
});

const task3 = cron.schedule('2 01 13 * * *', async () => {
    console.log('Running a task3 every minute');
    let st = await doSomething();
    event.emit('JOB COMPLETED Start 2'+` ${st}`);
});
// JOB COMPLETED Start 2 event is emitted and stop the task3
event.on('JOB COMPLETED Start 2', () => {
    console.log('Job done!');
    task3.stop();
});

const task4 = cron.schedule('1 30 15 * * *', async () => {
    console.log('Running a task4 every minute');
    let st = await doSomething();
    event.emit('JOB COMPLETED exit 4'+` ${st}`);
});
// JOB COMPLETED exit 4 event is emitted and stop the task3
event.on('JOB COMPLETED exit 4', () => {
    console.log('Job done!');
    task4.stop();
});