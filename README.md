## Resto-Service
### Web-приложение для ресторана

Данное приложение разработано для ресторана [Точка](https://vk.com/tochkaobninsk).
Оно включает в себя клиенскую часть и панель управления.

Клиентская часть позволяет:
![](/ReadMe/main-client.png)
- Бронировать определённый стол с помощью выбора его мышкой на интересующую дату
![](/ReadMe/reservation-client.png)
- Смотреть меню с описанием позиций
![](/ReadMe/menu-client.png)
- Добавлять позиции в корзину
- Делать предзаказ или доставку
- Оплачивать предзаказ, используя платёжную систему Stripe
- Получать смс и email оповещения, после подтверждения заказа или бронирования.

Панель управления позволяет администратору:
![](/ReadMe/main-admin.png)
- Добавлять категории, подкатегории, блюда, изменять, удалять их
![](/ReadMe/add-admin.png)
- Просматривать актуальные заказ и бронирования столов, подтверждать их или удалять.

- Редактировать информацию о клиентах, добавлять скидку и т.д.

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
