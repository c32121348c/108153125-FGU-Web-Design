const question = '題目';
const answers = [
    '錯誤1',
    '錯誤2',
    '錯誤3',
    '答案'
];
const correct = '答案';

document.getElementById('js-question').textContent = question;

document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    if(document.getElementsByTagName('button')[0].textContent === correct){
        window.alert('YES');
    }else{
        window.alert('NO');
    }
});
document.getElementsByTagName('button')[1].addEventListener('click', () => {
    if(document.getElementsByTagName('button')[1].textContent === correct){
        window.alert('YES');
    }else{
        window.alert('NO');
    }
});
document.getElementsByTagName('button')[2].addEventListener('click', () => {
    if(document.getElementsByTagName('button')[2].textContent === correct){
        window.alert('YES');
    }else{
        window.alert('NO');
    }
});
document.getElementsByTagName('button')[3].addEventListener('click', () => {
    if(document.getElementsByTagName('button')[3].textContent === correct){
        window.alert('YES');
    }else{
        window.alert('NO');
    }
});