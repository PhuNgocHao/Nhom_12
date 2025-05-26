import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const variants = {
  primary: {
    background: '#007bff',
    color: '#fff',
    hoverBg: '#0069d9',
  },
  secondary: {
    background: '#6c757d',
    color: '#fff',
    hoverBg: '#5a6268',
  },
  danger: {
    background: '#dc3545',
    color: '#fff',
    hoverBg: '#c82333',
  },
};

const sizes = {
  small: {
    fontSize: '12px',
    padding: '6px 12px',
  },
  medium: {
    fontSize: '16px',
    padding: '10px 20px',
  },
  large: {
    fontSize: '20px',
    padding: '14px 28px',
  },
};

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  
  ${({ variant }) => css`
    background-color: ${variants[variant].background};
    color: ${variants[variant].color};

    &:hover {
      background-color: ${variants[variant].hoverBg};
    }
  `}

  ${({ size }) => css`
    font-size: ${sizes[size].fontSize};
    padding: ${sizes[size].padding};
  `}

  ${({ disabled }) => 
    disabled &&
    css`
      background-color: #cccccc !important;
      color: #666666 !important;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

const IconWrapper = styled.span`
  display: inline-flex;
  margin-right: 8px;
  svg {
    width: 1em;
    height: 1em;
  }
`;

const Button = ({ variant = 'primary', size = 'medium', disabled = false, icon, children, ...props }) => {
  return (
    <StyledButton variant={variant} size={size} disabled={disabled} {...props}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  children: PropTypes.node.isRequired,
};

export default Button;

