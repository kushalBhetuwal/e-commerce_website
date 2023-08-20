import './form-input.style.scss';

const FormInput = ({ label, ...otherProps }) => {
    const inputValue = otherProps.value || '';
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label
          className={`${
            inputValue.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;