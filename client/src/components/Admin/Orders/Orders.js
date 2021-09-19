import React, { useEffect, useState } from 'react';
import styles from './Orders.module.scss';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import * as ordersAC from '../../../redux/actionCreators/ordersAC'
import DoneOrder from './DoneOrder'
import ToCheckOrder from './ToCheckOrder'


function Orders() {
  const [completedList, setCompletedList] = useState(false)
  const history = useHistory();
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:1234/api/orders')
      .then(res => res.json())
      .then(allOrders => {
        console.log(allOrders);
        dispatch(ordersAC.getOrdersAC(allOrders))
      })
    // здесь fetch (сага) в базу для получения списка заказов (причем только тех, что в обработке)
  })

  const finishedOrders = useSelector(state => state.ordersReducer.orders?.filter(el => el.status === "checked"))
  const toCheckOrders = useSelector(state => state.ordersReducer.orders?.filter(el => el.status === "toCheck"))

  return (
    <div className={styles.container}>

      <h2>Заказы, ожидающие обработки </h2>
      {toCheckOrders.length ? <ul className="uk-list uk-list-striped"> {toCheckOrders.map((order) => <ToCheckOrder key={order.id} order={order} />)} </ul> : null}

      <button className='uk-button uk-button-default' onClick={() => setCompletedList(prev => !prev)}>Вывести список завершенных(обработанных) заказов</button>
      <br />
      {completedList && finishedOrders.length ? <ul className="uk-list uk-list-striped"> {finishedOrders.map((order) => <DoneOrder key={order.id} order={order} />)}</ul> : null}
      <br />
      <button className='uk-button uk-button-default' onClick={() => history.goBack()}>Назад</button>

    </div >
  );
}

export default Orders;