import close from 'assets/icons/close.svg'
import clsx from 'clsx'
import { FC, HTMLProps, memo, MouseEvent, useContext } from 'react'
import { DataContext } from 'services'
import classes from './Select.module.scss'

interface SelectProps extends HTMLProps<HTMLSelectElement> {
	isOpen: boolean
	onIconClick: (e: MouseEvent<HTMLImageElement>) => void
}

export const Select: FC<SelectProps> = memo(({ isOpen, onIconClick, ...rest }): JSX.Element => {
	const { filteredData } = useContext(DataContext)

	return (
		<div
			className={clsx(classes.container, {
				[classes.container__active]: isOpen
			})}
		>
			<img
				id='select'
				className={clsx(classes.icon, {
					[classes.icon__active]: isOpen
				})}
				src={close}
				alt='close'
				onClick={onIconClick}
			/>
			<div
				className={clsx(classes.select_container, {
					[classes.select_container__active]: isOpen
				})}
			>
				<select className={classes.select} {...rest}>
					<option value=''></option>
					{filteredData.map(dataItem => (
						<option key={dataItem.title} value={dataItem.title}>
							{dataItem.title}
						</option>
					))}
					<option value=''>сбросить</option>
				</select>
			</div>
		</div>
	)
})
