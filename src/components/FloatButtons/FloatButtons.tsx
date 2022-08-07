import { Input, Select } from 'components'
import { ChangeEvent, FC, MouseEvent, useCallback, useContext, useEffect, useState } from 'react'
import { DataContext } from 'services'
import classes from './FloatButtons.module.scss'

interface FloatButtonsProps {}

export const FloatButtons: FC<FloatButtonsProps> = (): JSX.Element => {
	const { data, setFilteredData } = useContext(DataContext)
	const [inputValue, setInputValue] = useState('')
	const [selectedValue, setSelectedValue] = useState('')
	const [isOpen, setIsOpen] = useState('')

	useEffect(() => {
		console.log(selectedValue)

		const filterData = data.filter(
			dataItem => dataItem.title.includes(inputValue) && dataItem.title !== selectedValue
		)
		setFilteredData(filterData)
	}, [data, inputValue, selectedValue, setFilteredData])

	const inputHandler = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setInputValue(e.target.value)
		},
		[setInputValue]
	)

	const toggleHandler = useCallback(
		(e: MouseEvent<HTMLImageElement>) => {
			const id = e.currentTarget.id
			id === isOpen ? setIsOpen('') : setIsOpen(id)
		},
		[isOpen, setIsOpen]
	)

	const selectHandler = useCallback(
		(e: ChangeEvent<HTMLSelectElement>) => {
			setSelectedValue(e.target.value)
		},
		[setSelectedValue]
	)
	return (
		<div className={classes.container}>
			<Select isOpen={isOpen === 'select'} onIconClick={toggleHandler} onChange={selectHandler} />
			<Input
				className={classes.input}
				value={inputValue}
				isOpen={isOpen === 'input'}
				onIconClick={toggleHandler}
				onChange={inputHandler}
			/>
		</div>
	)
}
