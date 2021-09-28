## Resto-Service
### Web-приложение для ресторана

Данное приложение разработано для ресторана [Точка](https://vk.com/tochkaobninsk).
Оно включает в себя клиентскую часть и панель управления.

#### Клиентская часть:
![](/ReadMe/main-client.png)
- Бронирование определённого стола на интересующую дату
![](/ReadMe/reservation-client.png)
- Просмотр меню с описанием позиций.
![](/ReadMe/menu-client.png)
- Добавление позиции в корзину (доступно только авторизованным пользователям)
- Возможность оформления предзаказа или доставки
- Оплата предзаказа, используя платёжную систему Stripe.

#### Панель управления:
![](/ReadMe/main-admin.png)
- Добавление, изменение, удаление категории, подкатегории, блюд
![](/ReadMe/add-admin.png)
- Просмотр актуальных заказов и бронирование столов, подтверждение, удаление.
- Рассылка смс и email оповещений, после подтверждения заказа или бронирования.
- Редактирование информации о клиентах, добавление скидку и т.д.
- Добавление, удаление, изменение персонала.

## Стек технологий:
JavaScript

**DB**: PostgreSQL, Sequelize ORM

**Back**: Node.js, Express, Sessions, Bcrypt, Cors, Stripe

**Front**: React + Redux, Redux Saga, SVG, HTML5, SCSS/CSS, UI Kit


## Планы развития:
* Интеграция с системами автоматизации  IIKO и RKeeper

* Использование Redux Toolkit

* Полнофункциональное внедрение оплаты с другими СО
Интеграция со службами доставки

### Установка:
В директории 2 папки:
* server Отвечает за back-end. 
 1. cd server
 2. npm ci
 3. npx sequelize db:create
 4. npx sequelize db:migrate
 5. npx sequelize db:seed:all
 6. npm run dev
* client - front-end. 
 1. cd client 
 2. npm ci
 3. npm start
