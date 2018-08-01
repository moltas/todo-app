import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, value, handleChange, ...props }) => (
    <span>
        <input type="text" name={name} value={value} onChange={handleChange} {...props} />
    </span>
);

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default TextInput;
