import Select from 'react-select';
import PropTypes from 'prop-types';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: '48px',
    padding: '0',
    paddingLeft: '14px',
    backgroundColor: 'rgba(247, 247, 251, 1)',
    borderRadius: '14px',
    border: 'none',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '1.1',
    svg: { color: "rgba(18, 20, 23, 1)" },
    '&:hover': {
      borderColor: 'rgba(52, 112, 255, 1)',
    },
  }),
  option: (provided, state) => ({
    ...provided,    
    paddingBottom: '8px',
    backgroundColor: state.isSelected ? 'rgba(11, 68, 205, 1)' : 'rgba(18, 20, 23, 0.2)',
    color: state.isSelected ? 'rgba(52, 112, 255, 1)' : 'rgba(18, 20, 23, 0.5)',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.25',
    cursor: 'pointer',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#121417',
    cursor: 'pointer',
    transform: state.isFocused ? 'rotate(180deg)' : null,
  }),
  indicatorSeparator: provided => ({
    ...provided,
    backgroundColor: 'rgba(247, 247, 251, 1)',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    backgroundColor: 'rgba(247, 247, 251, 1)',
    color: '#121417',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '1.11',    
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '14px',
    padding: '14px 8px 14px 18px',
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