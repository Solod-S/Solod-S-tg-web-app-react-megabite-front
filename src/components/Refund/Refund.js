import { MainTitle, DescriptionWrapper } from "./Refund.styled";
const text = `
<img  style="width: 100%;" src="https://www.vetif.gov.ua/images/28.07.23_1.png")/>
<p>Відповідно до Закону України &laquo;Про захист прав споживачів&raquo; Ви можете протягом 14 днів з моменту покупки повернути товари, придбані в магазині &laquo;Megabite&raquo;, за умови виконання всіх норм передбачених Законом.</p>
<h3>Умови обміну/повернення товару належної якості</h3>
<p><em>Стаття 9. Згідно із Законом України &laquo;Про захист прав споживачів&raquo;:</em></p>
<p>Споживач має право обміняти непродовольчий товар належної якості на аналогічний у продавця, у якого він був придбаний, якщо товар не задовольнив його за формою, габаритами, фасоном, кольором, розміром або з інших причин не може бути використаний за призначенням. Споживач має право на обмін товару належної якості протягом чотирнадцяти днів, не рахуючи дня покупки.</p>
<p>Обмін товару належної якості здійснюється:</p>
<ul>
<li>якщо він не використовувався;</li>
<li>якщо збережено його товарний вигляд;</li>
<li>споживчі властивості, пломби, ярлики;</li>
<li>розрахунковий документ, виданий споживачеві разом із проданим товаром.</li>
</ul>
<p>Пояснення:</p>
<p><strong>Товарний вид</strong><strong>:</strong><span>&nbsp;</span>Новий товар реалізується із заводськими захисними плівками, це є одним із факторів визначення товарного вигляду. Відкрита зарядка, гарнітура, будь-які проводки та батарея закриті захисними плівками. Покупець повинен пам'ятати, що ушкоджувати ці елементи упаковки<span>&nbsp;</span><strong>не рекомендується</strong>! Також повинні бути відсутні потертості та подряпини на виробі.</p>
<p><strong>Не використовувався</strong>: Вся електроніка постачається з програмним забезпеченням за промовчанням. Перевірити, використовувався пристрій чи ні, чи може авторизований сервісний центр чи менеджер з прийому товару. У разі виявлення сторонніх програм, змін у налаштуваннях, слідах використання (файли, фотографії, нотатки, відеозаписи) магазин може скористатися правом відмовити клієнту як порушення цього пункту.</p>
<p><strong>Пломби, ярлики та розрахункові документи</strong>: Також цей пункт відноситься до товарного вигляду. Якщо при поверненні ви втратили документ, інформаційні дані або зірвали пломбу на товарі - ситуація буде аналогічною. Розрахункові документи необхідно надавати оригінал чека та гарантійного талона для повернення коштів.</p>
<p>Аксесуари&nbsp;&mdash; поверненню підлягають нерозпаковані аксесуари. Якщо є сліди розкриття аксесуара та спроби вторинного запакування (особливо це стосується ПЕ упаковки або блістерів) &mdash; товар повернути неможливо. Коли ж їх можна повернути? Можна відмовитись від покупки, перевіривши його перед продажем.</p>
<h3>Умови обміну/повернення товару неналежної якості</h3>

<img  style="width: 100%;" src="https://stryi-rada.gov.ua/wp-content/uploads/2023/05/preoduct_return.png")/>

<p><em>Стаття 8. Згідно із Законом України &laquo;Про захист прав споживачів&raquo;:</em></p>
<p>У разі виявлення протягом встановленого гарантійного строку недоліків споживач, у порядку та у строки, встановлені законодавством, має право вимагати:</p>
<ul>
<li>пропорційне зменшення ціни;</li>
<li>безоплатного усунення недоліків товару у розумний термін;</li>
<li>відшкодування витрат на усунення недоліків товару.</li>
</ul>
<p>Вимоги споживача, передбачені цією статтею, не підлягають задоволенню, якщо продавець, виробник (підприємство, яке відповідає вимогам споживача, встановлені частиною першою цієї статті) доведуть, що недоліки товару виникли внаслідок порушення споживачем правил користування товаром або його зберігання. Споживач має право брати участь у перевірці якості товару особисто чи через свого представника.</p>
<p><em>Повний та актуальний текст редакції<span>&nbsp;</span><a style="text-decoration: underline" href="http://zakon2.rada.gov.ua/laws/show/1023-12">Закону про захист прав споживачів</a></em>.</p>
`;

function Refund() {
  return (
    <>
      <MainTitle>Умова обміну та повернення</MainTitle>
      <DescriptionWrapper
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </>
  );
}

export default Refund;
