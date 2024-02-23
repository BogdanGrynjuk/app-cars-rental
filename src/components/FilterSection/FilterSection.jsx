import { Formik, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter, updateFilter } from "redux/filtersSlice";
import { selectAllCars, selectMaxMileage, selectMinMileage, selectMaxPrice, selectMinPrice } from "redux/selectors";

import * as Yup from "yup";

import CustomSelect from "./CustomSelect";
import { FormikControl, FormikForm, Label, GroupLabel, Wrapper, GroupInputs, Input, ErrorMsg, BtnControl, Button } from "./FilterSection.styled";
import GeneralContainer from "components/GeneralContainer";

const FilterSection = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectAllCars);
  const maxMileage = useSelector(selectMaxMileage);
  const minMileage = useSelector(selectMinMileage);
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

  const handleInputChangeWithLeadingZeros = (event) => {
    const value = parseInt(event.target.value, 10);
    event.target.value = isNaN(value) ? '' : value;
  };  

  const handleSubmit = (values) => {    
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
        .positive('Mileage must be a positive number')
        .integer('Vehicle mileage must be an integer')
        .moreThan(-1, 'Vehicle mileage must be a non-negative integer')
        .max(maxMileage, `The highest mileage in our catalog ${maxMileage}`)
        .test({
          name: 'checkMileageRange',
          exclusive: false,
          message: 'The starting mileage should be less than or equal to the ending mileage',
          test: function (from) {
            const to = this.parent.mileage?.to;
            return from === undefined || to === undefined || from <= to;
          },
        }),
      to: Yup.number()
        .positive('Mileage must be a positive number')
        .integer('Vehicle mileage must be an integer')
        .moreThan(-1, 'Vehicle mileage must be a non-negative integer')
        .min(minMileage, `Lowest mileage in our catalog ${minMileage}`)
        .when('from', (from, schema) => {
          return schema.test({
            name: 'checkMileageRange',
            exclusive: false,
            message: 'The starting mileage should be less than or equal to the ending mileage',
            test: (to) => from === undefined || to === undefined || to >= from,
          });
        }),
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

              <FormikControl role="group" aria-labelledby="mileage-head">
                <GroupLabel id="mileage-head">Сar mileage / km</GroupLabel>

                <GroupInputs>
                  <FormikControl>
                    <Input type="number" name="mileage.from" placeholder="From"  onBlur={handleInputChangeWithLeadingZeros}/>                    
                  </FormikControl>
          
                  <FormikControl>
                    <Input type="number" name="mileage.to" placeholder="To"  onBlur={handleInputChangeWithLeadingZeros}/>                    
                  </FormikControl>
                </GroupInputs>
                <ErrorMsg name="mileage.from" component={'div'} />
                <ErrorMsg name="mileage.to" component={'div'} />
              </FormikControl>
        
              <BtnControl>
                <Button type="submit">Search</Button>
                <Button type="reset" onClick={() => handleResetFilter(formik)}>Clear</Button>
              </BtnControl>
            </FormikForm>
          )}
        </Formik>
      </GeneralContainer>
      
    </Wrapper>
  );
};

export default FilterSection;
