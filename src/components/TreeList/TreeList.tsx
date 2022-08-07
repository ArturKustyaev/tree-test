import { FloatButtons, TreeItem } from 'components'
import { FC, useContext } from 'react'
import { DataContext } from 'services'

interface TreeListProps {}

export const TreeList: FC<TreeListProps> = (): JSX.Element => {
	const { filteredData } = useContext(DataContext)

	return (
		<div>
			{filteredData.map(dataItem => (
				<TreeItem key={dataItem.title} {...dataItem} />
			))}
			<FloatButtons />
		</div>
	)
}
