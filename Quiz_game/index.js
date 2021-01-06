//設定題目、回答、正解
const quiz = [
    {       //第一題
        question: '01題目',
        answers: [
            '回答1',
            '回答2',
            '回答3',
            '01答案'
        ],
        correct: '01答案'
    }, {    //第二題
        question: '02題目',
        answers: [
            '回答1',
            '回答2',
            '回答3',
            '02答案'
        ],
        correct: '02答案'
    }, {    //第三題
        question: '03題目',
        answers: [
            '回答1',
            '回答2',
            '回答3',
            '03答案'
        ],
        correct: '03答案'
    }
];
//取得題目數量
const quizLenght = quiz.length;
//題目index
let quizIndex = 0;
//答對題數
let score = 0;
//取得按鈕
const $botton = document.getElementsByTagName('button');
//取得按鈕數量
const bottonLenght = $botton.length;

//設定題目、按鈕文字
const setQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;

    let bottonIndex = 0;
    while(bottonIndex < bottonLenght){
        $botton[bottonIndex].textContent = quiz[quizIndex].answers[bottonIndex];
        bottonIndex++;
    }
};
//呼叫第一題
setQuiz();

//按鈕判斷函數
const clickHandler = (e) => {
    //判斷對錯
    if(e.target.textContent === quiz[quizIndex].correct){
        window.alert('YES');
        score++;    //答對題數+1
    }else{
        window.alert('NO');
    }

    //題號+1
    quizIndex++;

    //判斷還有沒有題目
    if(quizIndex < quizLenght){
        setQuiz();
    }else{
        window.alert('結束！ 得分是: ' + score + '/' + quizLenght);
    }
};

//給每個按鈕監聽click
let handlerIndex = 0;
while(handlerIndex < bottonLenght){
    $botton[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}