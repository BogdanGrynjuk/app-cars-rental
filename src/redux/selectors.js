import { createSelector } from '@reduxjs/toolkit';

export const selectAllCars = state => state.cars.allCars;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

export const selectMaxMileage = createSelector([selectAllCars], cars =>
  Math.max(...cars.map(car => car.mileage))
);

export const selectMaxPrice = createSelector([selectAllCars], cars =>
  Math.max(...cars.map(car => car.rentalPrice.slice(1)))
);

export const selectMinPrice = createSelector([selectAllCars], cars =>
  Math.min(...cars.map(car => car.rentalPrice.slice(1)))
);

export const selectFavorites = state => state.favorites.favorites;

export const selectFilters = state => state.filter.filter;
