interface DotData {
    name: string
    num: number
    from: number
    to: number
}

interface DotsData {
    [key: string]: DotData
}

export const dotsData: DotsData = {
    'topLeft': {name: 'Технологии', num: 1, from: 1980, to: 1986},
    'midLeft': {name: 'Кино', num: 2, from: 1987, to: 1991},
    'botLeft': {name: 'Литература', num: 3, from: 1992, to: 1997},
    'botRight': {name: 'Театр', num: 4, from: 1999, to: 2004},
    'midRight': {name: 'Спорт', num: 5, from: 2006, to: 2014},
    'topRight': {name: 'Наука', num: 6, from: 2015, to: 2022},
}