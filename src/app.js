import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

const store = configureStore();

store.dispatch(addExpense({ description: "water bill" }));
store.dispatch(addExpense({ description: "gas bill" }));
store.dispatch(setTextFilter("water"));

const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(VisibleExpenses);
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
