import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter, updateFilter } from "redux/filtersSlice";
import { selectAllCars } from "redux/selectors";


import * as Yup from "yup";

const FilterSection = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectAllCars);
  const arrCarMileage = cars.map(car => car.mileage);
  const maxMileage = Math.max(...arrCarMileage);
 
  
  const initialValues = {
    brand: '',
    mileage: {
      from: '',
      to: '',
    },
  };

  const handleSubmit = (values) => dispatch(updateFilter(values));    

  const handleResetFilter = () => dispatch(resetFilter());
  

  const validationSchema = Yup.object().shape({
    brand: Yup.string(),
    mileage: Yup.object().shape({
      from: Yup.number()
        .integer('Vehicle mileage must be an integer')
        .max(maxMileage, `The highest mileage in our catalog ${maxMileage}`),
      to: Yup.number()
        .integer('Vehicle mileage must be an integer')
        .max(maxMileage, `The highest mileage in our catalog ${maxMileage}`),
    }),
  });


  const uniqueBrends = new Set(cars.map(car => car.make));
  
  const brandOptions = [...uniqueBrends].map(brand => ({ key: brand, value: brand }));

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {formik => (
        <Form>
          <div>
            <label htmlFor="brand">Car brand</label>
            <Field list="brandList" id="brand" name="brand" placeholder="Enter text" />
            <datalist id="brandList">              
              {brandOptions.map(option => (
                <option key={option.key} value={option.value}>
                  {option.key}
                </option>
              ))}
            </datalist>
            <ErrorMessage name="brand" />
          </div>
        

          <div role="group" aria-labelledby="mileage-head">
            <p id="mileage-head">Сar mileage / km</p>

            <div>
              <Field type="number" name="mileage.from" placeholder="From" />
              <ErrorMessage name="mileage.from" />
            </div>
          
            <div>
              <Field type="number" name="mileage.to" placeholder="To" />
              <ErrorMessage name="mileage.to" />
            </div>

          </div>
        
          <button type="submit">Search</button>
          <button type="reset" onClick={handleResetFilter}>Clear</button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterSection;
