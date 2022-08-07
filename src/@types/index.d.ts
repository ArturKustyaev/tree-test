interface IData {
	title: string
	number: number
}

interface ITable {
	title: string
	subTitle: string
	dateStart: number
	dateEnd: number
	data: IData[]
}

interface TreeItem {
	title: string
	items?: TreeItem[]
}

type SortKeysType = '#' | 'title' | 'number'
