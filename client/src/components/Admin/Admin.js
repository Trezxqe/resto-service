import Main from './Main/Main';
import SideMenu from './SideMenu/SideMenu';
import styles from './Admin.module.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import Orders from './Orders/Orders'
import Staff from './Staff/Staff'
// import Order from './Order/Order';
// import SaladsInfo from './Menu/items/Salads/SaladsInfo';
import WorkerInfo from './Staff/WorkerInfo';
import AddCocktailForm from './Menu/items/Cocktails/AddCocktailForm';
import AddWorkerForm from './Staff/AddWorkerForm';
import SubcategoryItem from './Menu/SubcategoryItem/SubcategoryItem';
import DishInfo from './Menu/DishInfo/DishInfo';
import AddDishForm from './Menu/AddDishForm/AddDishForm';
// import CocktailsInfo from './Menu/items/Cocktails/CocktailsInfo';

function Admin() {
  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <SideMenu />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/menu" exact>
            <Menu />
          </Route>
          <Route path="/menu/edit/:dishName/:dishId" exact>
            <DishInfo />
          </Route>
          <Route path="/menu/:categoryName/:categoryId" exact>
            <SubcategoryItem />
          </Route>
          <Route path="/menu/add/:categoryName/:categoryId" exact>
            <AddDishForm />
          </Route>
          <Route path="/orders" exact>
            <Orders />
          </Route>
          <Route path="/staff/:id" exact>
            <WorkerInfo />
          </Route>
          <Route path="/staff" exact>
            <Staff />
          </Route>
          <Route path="/staff/addworker" exact>
            <AddWorkerForm />
          </Route>
        </Switch>
        <Footer />
      </Router >
    </div>
  );
}

export default Admin;
