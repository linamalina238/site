 'use strict';

    document.getElementById("showResult").addEventListener("click", () => {
      const form = document.getElementById("quizForm");
      const questions = ["q1", "q2", "q3"];
      let total = 0;

    
      questions.forEach(q => {
        const selected = form.querySelector(`input[name="${q}"]:checked`);
        if (selected) total += parseInt(selected.value);
      });

     
      const result = document.getElementById("result");
      if (total === 0) {
        result.textContent = "Ви ще не вибрали жодної відповіді 😺";
        return;
      }

      
      let message = "";
      if (total <= 20) message = "Ти — ледачий кіт 💤. Любиш комфорт і спокій.";
      else if (total <= 30) message = "Ти — спокійний мурчик 😽. Любиш баланс і затишок.";
      else if (total <= 40) message = "Ти — допитливий кошеня 🐾. Завжди шукаєш пригод!";
      else message = "Ти — енергійний мисливець 🐅! У тобі море сили і впевненості!";

      result.textContent = `Ваш результат: ${total} балів. ${message}`;
    });
  
