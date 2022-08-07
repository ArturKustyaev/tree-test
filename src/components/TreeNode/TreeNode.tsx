import clsx from 'clsx'
import { Table } from 'components'
import { FC, memo, useState } from 'react'
import classes from './TreeNode.module.scss'

interface TreeItemProps {
	containerClassName?: string
	className?: string
	title: string
	items?: TreeItem[] | ITable[]
}

export const TreeItem: FC<TreeItemProps> = memo(
	({ containerClassName, className, title, items }): JSX.Element => {
		const [activeTableIndex, setActiveTableIndex] = useState<number>(-1)

		if (items && 'data' in items[0]) {
			const tableItems = [...(items as ITable[])]

			const toggleTableInfoHandler = (index: number) => {
				activeTableIndex === index ? setActiveTableIndex(-1) : setActiveTableIndex(index)
			}

			return (
				<div className={clsx(classes.container, containerClassName)}>
					<div>
						<div className={clsx(classes.tree_node, className)}>{title}</div>
						<div className={classes.table_container}>
							{tableItems.map((tableItem, index) => (
								<Table
									className={classes.table}
									key={tableItem.title}
									table={tableItem}
									onClick={() => toggleTableInfoHandler(index)}
									isOpen={activeTableIndex === index}
								/>
							))}
						</div>
					</div>
				</div>
			)
		}

		return (
			<div className={classes.container}>
				<div>
					<div className={clsx(classes.tree_node, className)}>{title}</div>
					{items?.map(item => (
						<TreeItem
							containerClassName={classes.container__child}
							className={classes.tree_node__child}
							key={item.title}
							{...item}
						/>
					))}
				</div>
			</div>
		)
	}
)
