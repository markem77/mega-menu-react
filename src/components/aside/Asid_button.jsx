import React from 'react';
import "./Aside_button.css"

// Composant Asid_button
const Asid_button = ({ as: Component = 'button', children, filled, secondary, ...rest }) => {
  return (
    <Component
      className={`dir-control ${secondary ? 'dir-control--secondary' : ''} ${
        filled ? 'dir-control--filled' : ''
      }`}
      {...rest}
    >
      {children}
      <span />
      <span />
      <span />
      <span />
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
    </Component>
  );
};

// Valeurs par défaut pour `as`
Asid_button.defaultProps = {
  as: 'button',
};

export default Asid_button;
