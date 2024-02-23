import Select from 'react-select';
import PropTypes from 'prop-types';

const customStyles = {
  control: provided => ({
    ...provided,    
    width: '100%',
    height: '48px',
    padding: '0px 8px',
    backgroundColor: 'rgba(247, 247, 251, 1)',
    borderRadius: '12px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '20px',        
    svg: {      
      color: "rgba(18, 20, 23, 1)"
    },
    boxShadow:" rgba(0, 0, 0, 0.5) 2px 3px 5px",
    '&:hover': {
      boxShadow:" rgba(0, 0, 0, 0.5) 2px 8px 5px",
    },
  }),

  valueContainer: provided => ({ ...provided, padding: 0, }),
  
  menu: provided =>  ({
    ...provided,
    padding: '14px',
    borderRadius: '12px',   
    backgroundColor: 'rgba(247, 247, 251, 1)',
    boxShadow:" rgba(0, 0, 0, 0.5) 2px 8px 5px",
  }),

  menuList: provided => ({
    ...provided,
    paddingRight: '8px',
    '::-webkit-scrollbar': {
      width: '7px',      
    },
    '::-webkit-scrollbar-thumb': {
      background: 'rgba(18, 20, 23, 0.5)',
      borderRadius: '12px',
    },
  }),

  option: (provided, state) => ({
    ...provided,        
    backgroundColor: 'transparent',
    color: state.isSelected ? 'rgba(52, 112, 255, 1)' : 'rgba(18, 20, 23, 0.5)',
    fontWeight: state.isSelected && '600',
    cursor: 'pointer',
    "&:hover": {
        color: state.isSelected ? 'rgba(52, 112, 255, 1)' : 'rgba(18, 20, 23, 1)',
        backgroundColor: "transparent",
      },
  }),
  noOptionsMessage: (provided, state) => {
    console.log(provided);
    return {
      ...provided,
      textAlign: 'left',
      padding: 0,
      fontFamily: 'Manrope, sans-serif',
      fontSize: '12px',
      fontWeight: 600,      
      display: 'block',
      color: ' rgba(18, 20, 23, 0.5)',
    }
  },
  dropdownIndicator: (provided, state) => {    
    return ({
      ...provided,
      color: 'rgba(18, 20, 23, 1)',
      cursor: 'pointer',
      transform: state.isFocused && 'rotate(180deg)',
      padding:  0,
    })
  },
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    // display: state.isFocused && "none",
    backgroundColor: 'rgba(247, 247, 251, 1)',
    color: 'rgba(18, 20, 23, 1)',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '20px',    
  }),
  
};

const CustomSelect = ({ field, form, options, placeholder }) => {
  const selectedOption = options.find((option) => option.value === field.value) || '';

  const handleChange = (selectedOption) => {
    form.setFieldValue(field.name, selectedOption ? selectedOption.value : '');
  };
  const handleBlur = () => {
    form.setFieldTouched(field.name, true);
  };

  return (
    <Select
      name={field.name}
      styles={customStyles}
      options={options}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      value={selectedOption || ''}
    />
  );
};

CustomSelect.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
  }),
  form: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
};

export default CustomSelect;