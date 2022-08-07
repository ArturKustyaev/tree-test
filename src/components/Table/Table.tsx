import clsx from 'clsx'
import { FC, HTMLProps, memo, useCallback, useState } from 'react'
import { getFormattedDate } from 'utils'
import { tableHeaders } from './constants'
import classes from './Table.module.scss'

interface TableProps extends HTMLProps<HTMLDivElement> {
	className?: string
	table: ITable
	isOpen: boolean
}

export const Table: FC<TableProps> = memo(({ className, table, isOpen, ...rest }): JSX.Element => {
	const [tableInfo, setTableInfo] = useState<{
		data: IData[]
		sortKey: SortKeysType
		isDesc: boolean
	}>({ data: table.data, sortKey: '#', isDesc: false })

	const setSortHandler = useCallback(
		(sortKey: SortKeysType) => {
			const sortedData = [...tableInfo.data]

			if (sortKey !== '#') {
				sortedData.sort((a, b) => {
					if (!tableInfo.isDesc) {
						return a[sortKey] < b[sortKey] ? 1 : -1
					}

					return a[sortKey] > b[sortKey] ? 1 : -1
				})
			}

			if (sortKey === '#') {
				sortedData.reverse()
			}

			setTableInfo({ data: sortedData, sortKey, isDesc: !tableInfo.isDesc })
		},
		[setTableInfo, tableInfo.isDesc, tableInfo.data]
	)

	return (
		<div className={clsx(classes.container, className)} {...rest}>
			<div
				className={clsx(classes.header, {
					[classes.header__active]: isOpen
				})}
			>
				<div className={classes.header_inner}>
					<div>
						<p className={classes.title}>{table.title}</p>
						<p className={classes.subtitle}>{table.subTitle}</p>
					</div>
					<p className={classes.dates}>
						{getFormattedDate(table.dateStart)} - {getFormattedDate(table.dateEnd)}
					</p>
				</div>
			</div>
			<table
				className={clsx(classes.table, {
					[classes.table__active]: isOpen
				})}
				onClick={e => e.stopPropagation()}
			>
				<thead>
					<tr>
						{tableHeaders.map(headerItem => (
							<th key={headerItem.value} onClick={() => setSortHandler(headerItem.value)}>
								<span
									className={clsx(classes.table_header, {
										[classes.table_header__active]:
											tableInfo.isDesc && tableInfo.sortKey === headerItem.value
									})}
								>
									{headerItem.label}
								</span>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableInfo.data.map((item, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{item.title}</td>
							<td>{item.number}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
})
