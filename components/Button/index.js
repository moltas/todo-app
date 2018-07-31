import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => (
    <button className="button" type="button" {...props}>
        {children}
        <Styling />
    </button>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

const Styling = () => (
    <style jsx="true">{`
        .button {
            background: green;
            color: white;
            outline: none;
            padding: 0.5rem 1rem;
            border: none;
            cursor: pointer;
        }

        .button:hover {
            opacity: 0.7;
        }
    `}</style>
);

export default Button;
