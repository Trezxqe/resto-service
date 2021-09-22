import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DEL_DISH } from '../../../../redux/actionTypes/actionType';
import styles from './Dish.module.scss'

function Dish({ dish }) {
  let { data } = dish['File.data'];
  let base64 = new Buffer(data).toString('base64');
  let type = dish['File.type'];

  const dispatch = useDispatch();

  const deleteDish = () => {
    dispatch({ type: DEL_DISH, payload: dish.id });
    // console.log('delete')
    fetch(`http://localhost:1234/api/menu/${dish.id}`, {
      method: 'DELETE',
      credentials: 'include',
    }).then(console.log);
  };

  return (
      <div className={`"uk-child-width-1-2@m" ${styles.card}`} uk-grid>
        <div>
          <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
              <img src={`data:${type};base64,${base64}`} width='250' height='200' alt='IMG' />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">{dish.name}</h3>
              <p>Состав: {dish.description}</p>
              <p>Ккал: {dish.kcal} ккал</p>
              <p>Объём: {dish.portionSize} мл</p>
              <p>Цена: {dish.price}р</p>
              <div className={styles.card__button}>
                <Link to={`/menu/position/${dish.id}`} className='uk-button uk-button-default'>
                  <button>Редактировать</button>
                </Link>
                <button onClick={deleteDish}>Удалить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dish;
