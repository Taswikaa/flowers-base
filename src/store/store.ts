import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardReducer from './reducers/CardSlice';
import { detailCardReducer } from './reducers/DetailCardReducer';

// Рутовый редьюсер, который содержит все остальные
const rootReducer = combineReducers({
  cardReducer,
  detailCardReducer,
});

// Функция возвращающая глобальный стор
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

// Тип редьюсеров
export type RootState = ReturnType<typeof rootReducer>;
// Тип стора
export type AppStore = ReturnType<typeof setupStore>;
// Тип диспатча
export type AppDispatch = AppStore['dispatch']