import React from 'react'

import styles from '../../styles/Button.module.css'

export const ButtonType = {
  PRIMARY: "buttonPrimary",
  SECONDARY: "buttonSecondary"
}

type ButtonProps = {
  type?: string
  children?: (JSX.Element | string)[] | (JSX.Element | string)
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string,
  buttonType?: string
}

const defaultProps = {
  type: 'button',
  buttonType: "buttonPrimary"
}

export const Button: React.FC<ButtonProps> = ({ type, children, onClick, className, buttonType }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e)
    }
  }

  const buttonClass = `${styles.[buttonType]} ${className}` 

  return (
    <button className={buttonClass} onClick={handleClick} type={'button' || type}>{children}</button>
	)
}

Button.defaultProps = defaultProps