import { FeaturesItem } from "../../components";
import { List, Item, MainTitle, DescriptionWrapper } from "./Features.styled";

const text = `<h2>Megabite – Інтернет-магазин портативної електроніки, аксесуарів та комплектуючих.</h2>

<img  style="width: 100%;" src="https://i.ibb.co/F80FPFy/99.jpg")/>

<p>Інтернет-магазин Мегабайт веде свою діяльність на ринку портативної електроніки з 2008 року.</p>

<p>Кожен клієнт зможе підібрати у нас оптимальний для себе варіант. Також ми запропонуємо великий вибір аксесуарів для мобільних пристроїв, у тому числі для техніки Apple -&nbsp; на будь-який смак. Порадуємо Вас чудовими цінами на електронні книги та планшети. Для шанувальників музики представлений широкий асортимент навушників та плеєрів різних брендів.</p>

<p>Ми постійно працюємо, щоб надати найкращі умови для наших кліентів:</p>

<ul style="list-style: inside"> 
	<li>конкурентні ціни;</li>
	<li>доставка у максимально короткий термін;</li>
	<li>сервіс&nbsp; - Наша команда;</li>
	<li>гарантія на товар.</li>
</ul>

<p>Асортимент магазину регулярно поповнюється новинками. Для покупців постійно проводять різноманітні акції. Ми робимо все можливе, щоб покупки в Megabite були вигідними та приємними для Вас, адже довіра клієнтів – ndash; наша головна цінність.</p>

<h2>Замовлення товару</h2>

<p>Замовити товар, що сподобався Ви можете будь-яким із запропонованих способів:</p>

<p>Телефоном.</p>

<ol>
	<li>Для цього потрібно зателефонувати за номером 377-72-87, з понеділка по п'ятницю, з 9.30 до 18.00.</li>
	<li>Узгодити з оператором наявність на даний момент потрібного товару на складі.</li>
	<li>Зробити замовлення, повідомивши свої дані, адресу доставки та бажаний час доставки.</li>
</ol>

<p>Через форму на сайті.</p>

<ol>
	<li>Замовлення через сайт приймаються цілодобово. Після вибору товару, натисніть на значок «Додати в кошик».</li>
	<li>Вибрані товари розміщуються в кошику, вміст якого Ви можете переглянути, натиснувши на значок «Кошик» у верхньому правому кутку.</li>
	<li>Для замовлення товарів, що знаходяться в кошику, натисніть на значок «оформити товар».</li>
	<li>Після надходження замовлення, менеджер зателефонує Вам за вказаним номером телефону.</li>
</ol>

<p>Дорогі покупці, ми просимо Вас шанобливо ставитися до праці менеджерів та кур'єрів. Якщо з якихось причин Вам не сподобався доставлений товар, просимо оплатити роботу кур'єра.</p>

<p>Якщо на сайті Ви не виявили товару, що цікавить, або в даний момент його немає в наявності – залиште своє замовлення та вкажіть контактні дані. При надходженні товару ми Вам одразу передзвонимо та повідомимо.</p>

<h2>Відгуки про нас</h2>

<p>Якщо Ви все ще сумніваєтеся, чи купувати на нашому ресурсі, можете ознайомитися з відгуками, які залишили люди, які вже скористалися нашими послугами.</p>

<p><a href="http://price.ua/firm1406.html" target="_blank"><img src="https://megabite.ua/pix/img/ck-content/images/Screenshot_19.jpg" style="border-width: 0px; border-style: solid; width: 88px; height: 31px;"></a><a href="http://hotline.ua/yp/251/reviews/" target="_blank"><img alt="Рейтинг интернет-магазинов hotline.ua" src="https://hotline.ua/img/top50.gif" style="border-width: 0px; border-style: solid; width: 99px; height: 31px;"></a></p>

<p>Хороший покупець – задоволений покупець. Якщо Ви задоволені нашим сервісом, якщо Вам сподобалося робити у нас покупки – напишіть про це! Ви можете залишити коментар у нас на сайті або відвідати вказані вище ресурси. Ми будемо дуже вдячні за Ваш відгук, адже саме наша репутація та якість нашого обслуговування відрізняють нас від наших конкурентів.</p>

<p>&nbsp;</p>
`;

function Features({ features }) {
  return (
    <>
      <DescriptionWrapper
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
      <MainTitle>Чому обирають інтернет-магазин «Megabite»</MainTitle>
      <List>
        {features.length > 0 &&
          features.map(({ id, image, title, description }) => (
            <Item key={id}>
              <FeaturesItem
                image={image}
                title={title}
                description={description}
              />
            </Item>
          ))}
      </List>
    </>
  );
}

export default Features;
