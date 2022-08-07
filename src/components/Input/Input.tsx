import search from 'assets/icons/search.svg'
import clsx from 'clsx'
import { FC, HTMLProps, memo, MouseEvent } from 'react'
import classes from './Input.module.scss'

interface InputProps extends HTMLProps<HTMLInputElement> {
	className?: string
	isOpen: boolean
	onIconClick: (e: MouseEvent<HTMLImageElement>) => void
}

export const Input: FC<InputProps> = memo(
	({ className, isOpen, onIconClick, ...rest }): JSX.Element => {
		return (
			<div
				className={clsx(classes.container, className, {
					[classes.container__active]: isOpen
				})}
			>
				<input
					className={clsx(classes.input, {
						[classes.input__active]: isOpen
					})}
					type='text'
					{...rest}
				/>
				<img id='input' className={classes.icon} src={search} alt='search' onClick={onIconClick} />
			</div>
		)
	}
)
