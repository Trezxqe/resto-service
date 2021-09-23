import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as ordersAC from '../../../redux/actionCreators/ordersAC';
import * as reservationsAC from '../../../redux/actionCreators/actionCreators';
import DoneOrder from './DoneOrder';
import ToCheckOrder from './ToCheckOrder';
import styles from './Orders.module.scss';

const { REACT_APP_URL } = process.env;

function Orders() {
  const [completedList, setCompletedList] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  function myDateParse(rawString) {
    let arr = rawString.split(/\D/);
    arr[6] = arr[6].substr(0, 3); // Microseconds to milliseconds
    let months = {
      '01': 'Январь',
      '02': 'Февраль',
      '03': 'Март',
      '04': 'Апрель',
      '05': 'Май',
      '06': 'Июнь',
      '07': 'Июль',
      '08': 'Август',
      '09': 'Сентябрь',
      10: 'Октябрь',
      11: 'Ноябрь',
      12: 'Декабрь',
    };
    return {
      hours: arr[3],
      minutes: arr[4],
      day: arr[2],
      month: months[arr[1]],
      year: arr[0],
    };
  }
  useEffect(() => {
    fetch(`${REACT_APP_URL}api/orders`, { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        const allOrders = data.orders;
        const ordersForState = allOrders.map((order) => {
          return { ...order, timeFormat: myDateParse(order.Reservation.date_time) };
        });
        dispatch(ordersAC.getOrdersAC(ordersForState));
      });

    fetch(`${REACT_APP_URL}api/reservations`, { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        const allOrders = [...data.orders];
        const idToDelete = allOrders.map((el) => el['Reservation.id']);
        const allReservations = [...data.reservations];
        const reservationsWithoutOrders = allReservations.filter((reservation) => {
          if (!idToDelete.includes(reservation.id)) {
            return true;
          }
        });

        const reservationsForState = reservationsWithoutOrders.map((reservation) => {
          return { ...reservation, timeFormat: myDateParse(reservation.date_time) };
        });

        dispatch(reservationsAC.getReservationsAC(reservationsForState));
      });
    // здесь fetch (сага) в базу для получения списка заказов (причем только тех, что в обработке)
  }, []);

  const finishedOrders = useSelector((state) =>
    state.ordersReducer.orders?.filter((order) => [2, 6, 7].includes(order['state_id'])),
  );
  const toCheckOrders = useSelector((state) =>
    state.ordersReducer.orders?.filter((order) => [1, 3, 4, 5].includes(order['state_id'])),
  );
  return (
    <div className={styles.container}>
      <h2>Заказы, ожидающие обработки </h2>
      {toCheckOrders.length ? (
        <ul className='uk-list uk-list-striped'>
          {' '}
          {toCheckOrders.map((order) => (
            <ToCheckOrder key={order.id} order={order} />
          ))}{' '}
        </ul>
      ) : null}

      <button className='uk-button uk-button-default' onClick={() => setCompletedList((prev) => !prev)}>
        {' '}
        {completedList ? 'Скрыть' : 'Вывести'} список завершенных(обработанных) заказов
      </button>
      <br />
      {completedList && finishedOrders.length ? (
        <ul className='uk-list uk-list-striped'>
          {' '}
          {finishedOrders.map((order) => (
            <DoneOrder key={order.id} order={order} />
          ))}
        </ul>
      ) : null}
      <br />
      <button className='uk-button uk-button-default' onClick={() => history.goBack()}>
        Назад
      </button>
    </div>
  );
}

export default Orders;
