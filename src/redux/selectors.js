import { createSelector } from '@reduxjs/toolkit';

export const selectAllCars = state => state.cars.allCars;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

export const selectMaxMileage = createSelector([selectAllCars], cars =>
  Math.max(...cars.map(car => car.mileage))
);

export const selectMinMileage = createSelector([selectAllCars], cars =>
  Math.min(...cars.map(car => car.mileage))
);

export const selectMaxPrice = createSelector([selectAllCars], cars =>
  Math.max(...cars.map(car => car.rentalPrice.slice(1)))
);

export const selectMinPrice = createSelector([selectAllCars], cars =>
  Math.min(...cars.map(car => car.rentalPrice.slice(1)))
);

export const selectFavoriteCarsId = state => state.favorites.favorites;

export const selectFavoriteCars = createSelector(
  [selectAllCars, selectFavoriteCarsId],
  (cars, favoritesId) => cars.filter(car => favoritesId.includes(car.id))
);

export const selectFilterAllCards = state => state.filters.filterAllCars;

export const selectFilteredCars = createSelector(
  [selectAllCars, selectFilterAllCards],
  (cars, filter) => {
    const filterByBrand = car => !filter.brand || car.make === filter.brand;
    const filterByPrice = car =>
      !filter.price || Number(car.rentalPrice.slice(1)) <= Number(filter.price);
    const filterByMileage = car => {
      const { mileage } = car;
      return (
        (!filter.mileage.from || mileage >= filter.mileage.from) &&
        (!filter.mileage.to || mileage <= filter.mileage.to)
      );
    };

    return cars.filter(
      car => filterByBrand(car) && filterByPrice(car) && filterByMileage(car)
    );
  }
);

export const selectActiveCard = state => state.favorites.activeCard;
