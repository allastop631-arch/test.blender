  const QUESTIONS = [
  {q:'Что такое "Edit Mode" в Blender?',choices:['Режим рендеринга','Редактирование геометрии','Анимация','Импорт/экспорт'],a:1,explain:'Edit Mode — редактирование вершин, рёбер и граней.'},
  {q:'Горячая клавиша для переключения Object/Edit Mode?',choices:['Tab','G','R','Ctrl+R'],a:0,explain:'Tab — стандартное переключение режимов.'},
  {q:'Инструмент Extrude делает…',choices:['Удаление','Выдавливание геометрии','Добавление света','Запекание текстур'],a:1,explain:'Extrude создаёт новую геометрию.'},
  {q:'Какой объект является камерой рендера?',choices:['Cube','Empty','Camera','Light'],a:2,explain:'Camera — объект камеры.'},
  {q:'UV‑развёртка — это…',choices:['Анимация','Проекция 3D на 2D','Тип материала','Инструмент Sculpt'],a:1,explain:'Используется для текстурирования.'},
  {q:'Рендер‑движок в Blender?',choices:['Cycles','Arnold','Redshift','Unity'],a:0,explain:'Cycles — физический рендер.'},
  {q:'Subdivision Surface делает…',choices:['Оптимизацию','Сглаживание и увеличение полигонов','Удаление граней','Сжатие текстур'],a:1,explain:'Добавляет подразделения.'},
  {q:'Режим Sculpt нужен для…',choices:['Текстур','Лепки модели','Рендера','Анимации'],a:1,explain:'Sculpt — лепка формы.'},
  {q:'Удаление выделения — клавиша…',choices:['Ctrl+Z','Alt+G','X/Del','Shift+A'],a:2,explain:'X/Del — меню удаления.'},
  {q:'Viewport — это…',choices:['Материал','Окно просмотра сцены','Формат файла','Тип света'],a:1,explain:'Рабочее окно 3D‑вида.'},
  {q:'Горячая клавиша перемещения?',choices:['G','R','S','E'],a:0,explain:'G — grab (перемещение).'},
  {q:'Клавиша вращения?',choices:['G','R','S','Ctrl+R'],a:1,explain:'R — rotate.'},
  {q:'Клавиша масштабирования?',choices:['G','R','S','Shift+S'],a:2,explain:'S — scale.'},
  {q:'Где добавляют новые объекты?',choices:['File','Add','View','Render'],a:1,explain:'Add — меню добавления.'},
  {q:'Что делает модификатор Mirror?',choices:['Сглаживает','Отражает геометрию','Удаляет UV','Создаёт материал'],a:1,explain:'Делает симметрию.'},
  {q:'Как применить модификатор?',choices:['Ctrl+A','Apply в панели модификатора','Shift+A','Alt+A'],a:1,explain:'Кнопка Apply.'},
  {q:'Где включить отображение статистики (полигонов)?',choices:['Render Settings','Overlays','World','Output'],a:1,explain:'Overlays — статистика.'},
  {q:'Горячая клавиша каркаса (Wireframe)?',choices:['Z','W','Tab','Ctrl+Z'],a:0,explain:'Z открывает pie‑меню режимов.'},
  {q:'Что делает инструмент Loop Cut?',choices:['Удаляет грань','Добавляет кольцевой разрез','Создает UV','Строит Normal Map'],a:1,explain:'Ctrl+R — Loop Cut.'},
  {q:'Shade Smooth делает…',choices:['Плавное затенение','UV‑развёртку','Материал','Свет'],a:0,explain:'Сглаживает модель визуально.'},
  {q:'Как повернуть камеру на объект?',choices:['Shift+C','Ctrl+Alt+Numpad0','Shift+S','Alt+R'],a:1,explain:'Камера привязывается к виду.'},
  {q:'Как дублировать объект?',choices:['D','Shift+D','Ctrl+D','Alt+D'],a:1,explain:'Shift+D — копия.'},
  {q:'Линковать копию объекта?',choices:['Shift+D','Alt+D','Ctrl+D','Ctrl+Shift+D'],a:1,explain:'Alt+D — linked duplicate.'},
  {q:'Как скрыть объект?',choices:['H','X','Alt+H','Tab'],a:0,explain:'H — hide.'},
  {q:'Как показать скрытые?',choices:['H','Alt+H','Shift+H','Ctrl+H'],a:1,explain:'Alt+H — показать.'},
  {q:'Frame Selected — клавиша?',choices:['F','Shift+F','Numpad .','Ctrl+F'],a:2,explain:'Numpad . — фокус.'},
  {q:'Система координат Blender?',choices:['Правосторонняя','Левосторонняя','2D‑ось','OSM'],a:0,explain:'Blender — правосторонняя.'},
  {q:'Где меняют рендер‑движок?',choices:['Edit → Preferences','Render Properties','Shading','Output'],a:1,explain:'Render Properties.'},
  {q:'Как добавить материал?',choices:['UV Editor','Material Properties','Physics','Outliner'],a:1,explain:'Material Properties.'},
  {q:'Что делает модификатор Array?',choices:['Копирует объект массивом','Сглаживает','UV‑редактирование','Лепка'],a:0,explain:'Создает повторения.'},
  {q:'Сохранение файла — горячая клавиша?',choices:['Ctrl+S','Shift+S','Alt+S','Ctrl+Shift+S'],a:0,explain:'Ctrl+S — save.'},
  {q:'Где настраивается освещение сцены?',choices:['Shading','World/Light','Output','UV'],a:1,explain:'World и Light объекты.'},
  {q:'Где Viewport Shading режимы?',choices:['Toolbar','Верхняя панель 3D Viewport','UV Editor','Output'],a:1,explain:'В правой части хедера.'},
  {q:'Что делает инструмент Bevel?',choices:['Сглаживает UV','Создает фаски','Удаляет рёбра','Добавляет текстуру'],a:1,explain:'Bevel — фаски.'},
  {q:'Как закрепить ось при перемещении?',choices:['X/Y/Z','Ctrl+R','Shift+A','Alt+Z'],a:0,explain:'Нажмите нужную ось.'},
  {q:'Как включить отображение нормалей?',choices:['Overlays','Tools','Render','UV'],a:0,explain:'Overlays → Normals.'},
  {q:'Как сменить режим выделения вершин/рёбер/граней?',choices:['1/2/3','Tab','Shift+R','Ctrl+Tab'],a:0,explain:'1‑2‑3 — режим выделения.'},
  {q:'Где находится Outliner?',choices:['Внизу','Слева','Справа сверху','Нет'],a:2,explain:'Панель справа по умолчанию.'},
  {q:'Что такое Keyframe?',choices:['Полигон','Кадр анимации','Контрольная точка позиции/вращения/масштаба','Тип модификатора'],a:2,explain:'Определяет состояние объекта во времени.'},
  {q:'Как изменить цвет Viewport объекта?',choices:['Material → Base Color','Object Properties → Viewport Display','UV Editor','Render'],a:1,explain:'Viewport Display.'}
];

    // Состояние теста
    let currentIndex = 0;
    let answers = new Array(QUESTIONS.length).fill(null);

    const totalEl = document.getElementById('total');
    const currentEl = document.getElementById('current');
    const quizArea = document.getElementById('quiz-area');
    const progBar = document.getElementById('prog-bar');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function init() {
      totalEl.textContent = QUESTIONS.length;
      renderQuestion();
      updateControls();
    }

    function renderQuestion() {
      const item = QUESTIONS[currentIndex];
      currentEl.textContent = currentIndex + 1;
      const selected = answers[currentIndex];

      quizArea.innerHTML = `
        <div class="question">
          <div class="q-title">${escapeHtml(item.q)}</div>
          <form id="qform" class="choices">
            ${item.choices.map((c,i)=>`
              <label class="choice">
                <input type="radio" name="choice" value="${i}" ${selected===i? 'checked' : ''}>
                <span>${escapeHtml(c)}</span>
              </label>
            `).join('')}
          </form>
          <div class="small" style="margin-top:8px;color:var(--muted)">Подсказка: выберите один вариант и нажмите "Далее". В конце увидите результат.</div>
        </div>
      `;

      // обновляем прогресс бар
      const pct = Math.round(((currentIndex) / QUESTIONS.length) * 100);
      progBar.style.width = pct + '%';

      // слушатель формы
      const form = document.getElementById('qform');
      form.addEventListener('change', (e)=>{
        const val = parseInt(form.choice.value);
        answers[currentIndex] = val;
      });
    }

    function updateControls(){
      prevBtn.disabled = currentIndex === 0;
      prevBtn.style.opacity = prevBtn.disabled ? 0.5 : 1;
      nextBtn.textContent = currentIndex === QUESTIONS.length - 1 ? 'Завершить' : 'Далее';
    }

    prevBtn.addEventListener('click', ()=>{
      if(currentIndex>0){ currentIndex--; renderQuestion(); updateControls(); }
    });

    nextBtn.addEventListener('click', ()=>{
      // если последний — подсчитать
      if(currentIndex === QUESTIONS.length - 1){
        // при желании — узнать, выбрал ли пользователь ответы. Не требуем выбора на все вопросы.
        showResults();
        return;
      }
      currentIndex++;
      renderQuestion();
      updateControls();
    });

    function showResults(){
      // подсчёт
      let score = 0;
      const total = QUESTIONS.length;
      const answersList = [];
      QUESTIONS.forEach((q,i)=>{
        const user = answers[i];
        const correct = q.a;
        const ok = user === correct;
        if(ok) score++;
        answersList.push({i, q: q.q, user, correct, ok, explain: q.explain});
      });

      // отобразить результат
      const percent = Math.round((score/total)*100);
      progBar.style.width = '100%';

      quizArea.innerHTML = `
        <div class="result">
          <h2>Результат: ${score} / ${total}</h2>
          <div style="font-weight:700;font-size:18px;margin-top:6px">Процент: ${percent}%</div>
          <div class="explain" style="margin-top:12px">${getPerformanceText(percent)}</div>

          <div class="answers-list">
            ${answersList.map(it=>`
              <div style="padding:10px;margin-top:10px;border-radius:8px;background:rgba(255,255,255,0.01);text-align:left">
                <div style="font-weight:600">${escapeHtml(it.q)}</div>
                <div style="margin-top:6px">Ваш ответ: <span class="${it.ok? 'correct':'wrong'}">${it.user===null? '<em>Не отвечено</em>' : escapeHtml(QUESTIONS[it.i].choices[it.user])}</span></div>
                <div style="margin-top:4px">Правильный ответ: <strong>${escapeHtml(QUESTIONS[it.i].choices[it.correct])}</strong></div>
                <div class="explain">${escapeHtml(it.explain)}</div>
              </div>
            `).join('')}
          </div>

          <div style="margin-top:14px;display:flex;gap:8px;justify-content:center">
            <button id="retryBtn">Пройти снова</button>
            <button id="reviewBtn" class="secondary">Просмотреть вопросы</button>
          </div>
        </div>
      `;

      document.getElementById('retryBtn').addEventListener('click', ()=>{
        answers = new Array(QUESTIONS.length).fill(null);
        currentIndex = 0;
        startTimer();
    init();
      });
      document.getElementById('reviewBtn').addEventListener('click', ()=>{
        currentIndex = 0;
        renderReview();
      });
    }

    function renderReview(){
      // показать все вопросы с правильными ответами и выделением
      quizArea.innerHTML = `
        <div>
          ${QUESTIONS.map((q,i)=>`
            <div style="padding:12px;border-radius:10px;margin-bottom:10px;background:rgba(255,255,255,0.01)">
              <div style="font-weight:700">${escapeHtml(q.q)}</div>
              <div style="margin-top:8px">${q.choices.map((c,idx)=>{
                const cls = idx===q.a ? 'correct' : '';
                return `<div style="margin-top:6px">${idx===q.a? '✔️' : '▫️'} <span class="${cls}">${escapeHtml(c)}</span></div>`;
              }).join('')}</div>
              <div class="explain">${escapeHtml(q.explain)}</div>
            </div>
          `).join('')}
          <div style="display:flex;gap:8px;justify-content:center;margin-top:10px">
            <button id="backToResult" class="secondary">Назад к результатам</button>
          </div>
        </div>
      `;

      document.getElementById('backToResult').addEventListener('click', showResults);
    }

    function getPerformanceText(pct){
      if(pct===100) return 'Отлично! Вы отлично усвоили базу Blender — продолжайте практиковаться.';
      if(pct>=80) return 'Хорошо — базовые понятия освоены. Попробуйте углубиться в моделирование и рендер.';
      if(pct>=50) return 'Средне — вы знаете основы, но стоит попрактиковаться с инструментами и режимами.';
      return 'Низкий результат — рекомендую пройти базовое руководство и потренироваться с простыми моделями.';
    }

    // Небольшая утилита экранирования
    function escapeHtml(s){
      return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    let timer = 40*60; // 40 минут в секундах
let timerInterval;
function startTimer(){
  const timerEl = document.getElementById('timer');
  timerInterval = setInterval(()=>{
    timer--;
    const m = Math.floor(timer/60).toString().padStart(2,'0');
    const s = (timer%60).toString().padStart(2,'0');
    timerEl.textContent = m+":"+s;
    if(timer<=0){ clearInterval(timerInterval); showResults(); }
  },1000);
}
// Инициализация
window.addEventListener("DOMContentLoaded", () => {
  startTimer();
});
    init();