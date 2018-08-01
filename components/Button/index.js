import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => (
    <button className="button" type="button" {...props}>
        {children}
        <style jsx>{`
            .button {
                background: var(--red);
                color: var(--white);
                outline: none;
                padding: 0.5rem 1rem;
                border: none;
                cursor: pointer;
            }

            .button:hover {
                opacity: 0.7;
            }
        `}</style>
    </button>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Button;
