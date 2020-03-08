window.addEventListener('DOMContentLoaded', function () {

  let question = [{
    text: 'Question 1',
    hint: 'Подсказка на первый вопрос', 
    answer: 'Это ответ на вопрос 1', 
    point: 100
  },
  {
    text: 'Question 2',
    hint: 'Подсказка на второй вопрос', 
    answer: 'Это ответ на вопрос 2', 
    point: 200
  },
  {
    text: 'Q3',
    hint: 'Подсказка на 3 вопрос', 
    answer: 'Это ответ на вопрос 3', 
    point: 300
  },
  {
    text: 'Q4',
    hint: 'Подсказка на 4 вопрос', 
    answer: 'Это ответ на вопрос 4', 
    point: 400
  },
  {
    text: 'q5',
    hint: 'Подсказка на 5 вопрос', 
    answer: 'Это ответ на вопрос 5', 
    point: 500
  },
  {
    text: 'Q6',
    hint: 'Подсказка на 6 вопрос', 
    answer: 'Это ответ на вопрос 6', 
    point: 600
  },
  {
    text: 'Бла-Бла. Это 7 вопрос',
    hint: 'выаываывававываываыа', 
    answer: 'Это ответ на вопрос 7', 
    point: 700
  },
  {
    text: 'Q8',
    hint: 'Подсказка на 8 вопрос', 
    answer: 'Это ответ на вопрос 8', 
    point: 800
  },
  {
    text: 'Q9',
    hint: 'Это подсказка на 9 вопрос', 
    answer: 'Это ответ', 
    point: 900
  },
  {
    text: '10',
    hint: 'выаываывававываываыа', 
    answer: 'Это ответ', 
    point: 1000
  }
];

  let td = document.querySelectorAll('td'), // Псевдомассив ячеек 
    table = document.querySelector('table'), //Таблица
    wrap = document.querySelector('.wrap'),
    modal = document.querySelector('.modal'), // Сама модалка с вопросом
    engText = document.querySelector('.engText'), //текст на английском
    answerTeamOneBtn = document.querySelector('.answerTeamOne'), //отвечает команда 1
    answerTeamTwoBtn = document.querySelector('.answerTeamTwo'), //отвечает команда 2 
    hintBtn = document.querySelector('.hint'), // подсказка
    findAnswer = document.querySelector('.findAnswer'), // узнать ответ
    yesBtn = document.querySelector('.yes'), //ответ правильный 
    noBtn = document.querySelector('.no'), //ответ неправильный
    teamOnePointBlock = document.querySelector('.teamOnePoint'), //отображение очков первой команды
    teamTwoPointBlock = document.querySelector('.teamTwoPoint'), //отображение очков 2 команды
    teamOneTitle = document.querySelector('.teamOneTitle'), //название первой команды
    teamTwoTitle = document.querySelector('.teamTwoTitle'), //название второй команды
    pointOneTeam = 0, //Очки первой команды 
    pointTwoTeam = 0; //Очки второй команды


    // Названия команд  

    teamOneTitle.textContent = prompt('Название первой команды', '');
    teamTwoTitle.textContent = prompt('Название второй команды', '');
    answerTeamOneBtn.textContent = 'Отвечает команда ' + teamOneTitle.textContent;
    answerTeamTwoBtn.textContent = 'Отвечает команда ' + teamTwoTitle.textContent;

  // Открытие модального окна

  table.addEventListener('click', function (event) {
    target = event.target;
    if (target.tagName != 'TD') {
      return;
    } else {
      for (let i = 0; i < td.length; i++) {
        if (td[i] == target) {

          wrap.style.display = 'block';//Показываем затемнение

          engText.textContent = question[i].text;

          // Показать ответ 

          findAnswer.addEventListener('click', function(){
            alert(question[i].answer);
            findAnswer.style.display = 'none';
          });


          findAnswer.style.display = 'inline-block';


          // Показать подсказку
          hintBtn.addEventListener('click', function(){
            alert(question[i].hint);
            hintBtn.style.display = 'none';


             // Отвечает команда 1 с подсказкой

          answerTeamOneBtn.addEventListener('click', function(){
            answerTeamOneBtn.style.display = 'none'; //Отвечает команла 1
            answerTeamTwoBtn.style.display = 'none'; //Отвечает команда 2
            yesBtn.style.display = 'inline-block'; //Ответ верный
            noBtn.style.display = 'inline-block'; // Ответ неверный

            // Ответ верный (с подсказкой)

          yesBtn.addEventListener('click', function(){
            wrap.style.display = 'none'; //Убираём затемнение с модалкой
            hintBtn.style.display = 'inline-block'; //Кнопка с подсказкой
            answerTeamOneBtn.style.display = 'inline-block'; //Отвечает команла 1
            answerTeamTwoBtn.style.display = 'inline-block'; //Отвечает команда 2
            yesBtn.style.display = 'none'; //Ответ верный
            noBtn.style.display = 'none'; // Ответ неверный
            pointOneTeam += question[i].point / 2;
            teamOnePointBlock.textContent = pointOneTeam;
            delete question[i];
            td[i].style.pointerEvents = 'none'; //некликабельность ячейки
            td[i].style.backgroundColor = 'red';
          });

          // Ответ неверный (с подсказкой)

          noBtn.addEventListener('click', function(){
            wrap.style.display = 'none'; //Убираём затемнение с модалкой
            hintBtn.style.display = 'inline-block'; //Кнопка с подсказкой
            answerTeamOneBtn.style.display = 'inline-block'; //Отвечает команла 1
            answerTeamTwoBtn.style.display = 'inline-block'; //Отвечает команда 2
            yesBtn.style.display = 'none'; //Ответ верный
            noBtn.style.display = 'none'; // Ответ неверный
            pointOneTeam -= question[i].point;
            teamOnePointBlock.textContent = pointOneTeam;
            delete question[i];
            td[i].style.pointerEvents = 'none'; //некликабельность ячейки
            td[i].style.backgroundColor = 'red';
          });
          });

          


          // Отвечает команда 2 с подсказкой

          answerTeamTwoBtn.addEventListener('click', function(event){
            answerTeamOneBtn.style.display = 'none'; //Отвечает команла 1
            answerTeamTwoBtn.style.display = 'none'; //Отвечает команда 2
            yesBtn.style.display = 'inline-block'; //Ответ верный
            noBtn.style.display = 'inline-block'; // Ответ неверный

            // Ответ верный (с подсказкой)

          yesBtn.addEventListener('click', function(){
            wrap.style.display = 'none'; //Убираём затемнение с модалкой
            hintBtn.style.display = 'inline-block'; //Кнопка с подсказкой
            answerTeamOneBtn.style.display = 'inline-block'; //Отвечает команла 1
            answerTeamTwoBtn.style.display = 'inline-block'; //Отвечает команда 2
            yesBtn.style.display = 'none'; //Ответ верный
            noBtn.style.display = 'none'; // Ответ неверный
            pointTwoTeam += question[i].point / 2;
            teamTwoPointBlock.textContent = pointTwoTeam;
            delete question[i];
            td[i].style.pointerEvents = 'none'; //некликабельность ячейки
            td[i].style.backgroundColor = 'red';
          });

          // Ответ неверный (с подсказкой)

          noBtn.addEventListener('click', function(){
            wrap.style.display = 'none'; //Убираём затемнение с модалкой
            hintBtn.style.display = 'inline-block'; //Кнопка с подсказкой
            answerTeamOneBtn.style.display = 'inline-block'; //Отвечает команла 1
            answerTeamTwoBtn.style.display = 'inline-block'; //Отвечает команда 2
            yesBtn.style.display = 'none'; //Ответ верный
            noBtn.style.display = 'none'; // Ответ неверный
            pointTwoTeam -= question[i].point;
            teamTwoPointBlock.textContent = pointTwoTeam;
            delete question[i];
            td[i].style.pointerEvents = 'none'; //некликабельность ячейки
            td[i].style.backgroundColor = 'red';
          });

          });

          });


          // Отвечает команда 1 без подсказки

          answerTeamOneBtn.addEventListener('click', function(){
            hintBtn.style.display = 'none'; //Кнопка с подсказкой
            answerTeamOneBtn.style.display = 'none'; //Отвечает команла 1
            answerTeamTwoBtn.style.display = 'none'; //Отвечает команда 2
            yesBtn.style.display = 'inline-block'; //Ответ верный
            noBtn.style.display = 'inline-block'; // Ответ неверный

            // Ответ верный (без подсказки)

          yesBtn.addEventListener('click', function(){
            wrap.style.display = 'none'; //Убираём затемнение с модалкой
            hintBtn.style.display = 'inline-block'; //Кнопка с подсказкой
            answerTeamOneBtn.style.display = 'inline-block'; //Отвечает команла 1
            answerTeamTwoBtn.style.display = 'inline-block'; //Отвечает команда 2
            yesBtn.style.display = 'none'; //Ответ верный
            noBtn.style.display = 'none'; // Ответ неверный
            pointOneTeam += question[i].point;
            teamOnePointBlock.textContent = pointOneTeam;
            delete question[i];
            td[i].style.pointerEvents = 'none'; //некликабельность ячейки
            td[i].style.backgroundColor = 'red';
          });

          // Ответ неверный (без подсказки)

          noBtn.addEventListener('click', function(){
            wrap.style.display = 'none'; //Убираём затемнение с модалкой
            hintBtn.style.display = 'inline-block'; //Кнопка с подсказкой
            answerTeamOneBtn.style.display = 'inline-block'; //Отвечает команла 1
            answerTeamTwoBtn.style.display = 'inline-block'; //Отвечает команда 2
            yesBtn.style.display = 'none'; //Ответ верный
            noBtn.style.display = 'none'; // Ответ неверный
            pointOneTeam -= question[i].point;
            teamOnePointBlock.textContent = pointOneTeam;
            delete question[i];
            td[i].style.pointerEvents = 'none'; //некликабельность ячейки
            td[i].style.backgroundColor = 'red';
          });
          });

          


          // Отвечает команда 2 без подсказки

          answerTeamTwoBtn.addEventListener('click', function(event){
            hintBtn.style.display = 'none'; //Кнопка с подсказкой
            answerTeamOneBtn.style.display = 'none'; //Отвечает команла 1
            answerTeamTwoBtn.style.display = 'none'; //Отвечает команда 2
            yesBtn.style.display = 'inline-block'; //Ответ верный
            noBtn.style.display = 'inline-block'; // Ответ неверный

            // Ответ верный (без подсказки)

          yesBtn.addEventListener('click', function(){
            wrap.style.display = 'none'; //Убираём затемнение с модалкой
            hintBtn.style.display = 'inline-block'; //Кнопка с подсказкой
            answerTeamOneBtn.style.display = 'inline-block'; //Отвечает команла 1
            answerTeamTwoBtn.style.display = 'inline-block'; //Отвечает команда 2
            yesBtn.style.display = 'none'; //Ответ верный
            noBtn.style.display = 'none'; // Ответ неверный
            pointTwoTeam += question[i].point;
            teamTwoPointBlock.textContent = pointTwoTeam;
            delete question[i];
            td[i].style.pointerEvents = 'none'; //некликабельность ячейки
            td[i].style.backgroundColor = 'red';
          });

          // Ответ неверный (без подсказки)

          noBtn.addEventListener('click', function(){
            wrap.style.display = 'none'; //Убираём затемнение с модалкой
            hintBtn.style.display = 'inline-block'; //Кнопка с подсказкой
            answerTeamOneBtn.style.display = 'inline-block'; //Отвечает команла 1
            answerTeamTwoBtn.style.display = 'inline-block'; //Отвечает команда 2
            yesBtn.style.display = 'none'; //Ответ верный
            noBtn.style.display = 'none'; // Ответ неверный
            pointTwoTeam -= question[i].point;
            teamTwoPointBlock.textContent = pointTwoTeam;
            delete question[i];
            td[i].style.pointerEvents = 'none'; //некликабельность ячейки
            td[i].style.backgroundColor = 'red';
          });

          });
    }
  }
}
  });
});