import { PropsWithChildren, FC, HTMLAttributes } from 'react'
import { colorRange, sizingScale } from '../../types'
import styles from './Button.module.scss'

type Props = PropsWithChildren<{
  type: 'button' | 'submit' | 'reset'
  fullWidth: boolean
  size: Omit<sizingScale, 'full' | 'auto'>
  radius: Omit<sizingScale, 'xl'>
  bordered: boolean
  shadow: boolean
  color: colorRange
  letterSpacing: Omit<sizingScale, 'xl' | 'full' | 'auto'>
  uppercase: boolean
  disabled: boolean
  flat: boolean
  light: boolean
  auto: boolean
  icon: JSX.Element
  iconRight: JSX.Element
}> &
  HTMLAttributes<HTMLButtonElement & HTMLAnchorElement>

const Button: FC<Partial<Props>> = ({
  type = 'button',
  fullWidth,
  size = 'xs',
  radius,
  bordered,
  shadow,
  color = 'primary',
  letterSpacing,
  light,
  auto,
  icon,
  iconRight,
  flat,
  disabled,
  children = null,
  ...props
}) => {
  if (disabled) {
    color = 'gray'
  }
  const singleIcon = children ? false : true
  const colorType = color && !flat ? '-std' : '-flat'

  console.log(singleIcon)

  const buttonStyles: string[] | string = [
    size && styles[`btn_${size}`],
    radius && `radius_${radius}`,
    color && !flat
      ? styles[`btn_${color}${colorType}`]
      : styles[`btn_${color}${colorType}`],
    bordered && styles[`btn_${color}${colorType}__bordered`],
    bordered && shadow && styles[`btn_${color}${colorType}__bordered__shadow`],
    !bordered && shadow && styles[`btn_${color}${colorType}__shadow`],
    letterSpacing && styles[`letterSpacing_${letterSpacing}`],
    fullWidth && 'fullWidth',
    disabled && styles.btn_disabled,
    light && styles[`btn_${color}${colorType}__light`],
  ]
    .join(' ')
    .trim()

  const IconStyles = [
    styles.icon,
    singleIcon && styles.icon__single,
    icon && !singleIcon && styles.icon__left,
    iconRight && !singleIcon && styles.icon__right,
  ]
    .join(' ')
    .trim()

  return (
    <button
      className={`${styles.btn} ${buttonStyles}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className={`${IconStyles}`}>{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className={`${IconStyles}`}>{iconRight}</span>}
    </button>
  )
}

export default Button
