import { Formik, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter, updateFilter } from "redux/filtersSlice";
import { selectAllCars, selectMaxMileage, selectMaxPrice, selectMinPrice } from "redux/selectors";

import * as Yup from "yup";

import CustomSelect from "./CustomSelect";
import { FormikControl, FormikForm, Label, Wrapper } from "./FilterSection.styled";
import GeneralContainer from "components/GeneralContainer";

const FilterSection = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectAllCars);
  const maxMileage = useSelector(selectMaxMileage);
  const maxPrice = useSelector(selectMaxPrice);
  const minPrice = useSelector(selectMinPrice);

  const uniqueBrends = new Set(cars.map(car => car.make));
  const brandOptions = [...uniqueBrends].sort((a, b) => a.localeCompare(b)).map(brand => ({ label: brand, value: brand }));

  const priceOptions = [];
  const step = 10;
  const firstPriceOption = Math.ceil(minPrice / 10) * 10;
  const lastPriceOption = Math.ceil(maxPrice / 10) * 10;

  for (let i = firstPriceOption; i <= lastPriceOption; i += step) {
    priceOptions.push({ label: i, value: i })
  };

  const initialValues = {
    brand: '',
    price: '',
    mileage: {
      from: '',
      to: '',
    },
  };

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(updateFilter(values));
  };    

  const handleResetFilter = (formik) => {
    dispatch(resetFilter());
    formik.resetForm(); 
  };  

  const validationSchema = Yup.object().shape({
    brand: Yup.string(),
    price: Yup.number(),
    mileage: Yup.object().shape({
      from: Yup.number()
        .integer('Vehicle mileage must be an integer')
        .max(maxMileage, `The highest mileage in our catalog ${maxMileage}`),
      to: Yup.number()
        .integer('Vehicle mileage must be an integer')
        .max(maxMileage, `The highest mileage in our catalog ${maxMileage}`),
    }),
  });  

  return (
    <Wrapper>
      <GeneralContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {formik => (
            <FormikForm>
              <FormikControl>
                <Label htmlFor="brand">Car brand</Label>
                <Field name="brand" component={CustomSelect} options={brandOptions} placeholder="Enter the text" />
                <ErrorMessage name="brand" />
              </FormikControl>

              <FormikControl>
                <Label htmlFor="price">Price/ 1 hour</Label>
                <Field name="price" component={CustomSelect} options={priceOptions} placeholder="To $" />
                <ErrorMessage name="price" />
              </FormikControl>

              <div role="group" aria-labelledby="mileage-head">
                <p id="mileage-head">Сar mileage / km</p>

                <FormikControl>
                  <Field type="number" name="mileage.from" placeholder="From" />
                  <ErrorMessage name="mileage.from" />
                </FormikControl>
          
                <FormikControl>
                  <Field type="number" name="mileage.to" placeholder="To" />
                  <ErrorMessage name="mileage.to" />
                </FormikControl>

              </div>
        
              <button type="submit">Search</button>
              <button type="reset" onClick={() => handleResetFilter(formik)}>Clear</button>
            </FormikForm>
          )}
        </Formik>
      </GeneralContainer>
      
    </Wrapper>
  );
};

export default FilterSection;
