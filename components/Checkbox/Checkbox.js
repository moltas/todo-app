import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ name, value, checked, handleChange, ...props }) => (
    <span>
        <label htmlFor={name}>
            <input type="checkbox" checked={checked} name={name} value={value} onChange={handleChange} {...props} />
            <span className="checkbox" />
        </label>
        <style jsx>{`
            input[type='checkbox'] {
                display: none;
            }

            .checkbox {
                display: inline-block;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                border: 2px solid #00000021;
                cursor: pointer;
            }

            input[type='checkbox']:checked + .checkbox {
                border-color: #50e3a4;
            }
        `}</style>
    </span>
);

Checkbox.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
    value: undefined,
    checked: false,
    name: undefined,
};

export default Checkbox;
