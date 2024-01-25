interface DotData {
    name: string
    num: number
    from: number
    to: number
    slides: string[]
}

interface DotsData {
    [key: string]: DotData
}

export const dotsData: DotsData = {
    'topRight': {
        name: 'Технологии', num: 1, from: 1980, to: 1986,
        slides: [
            'Технологии слайд 1',
            'Технологии слайд 2',
            'Технологии слайд 3',
            'Технологии слайд 4',
            'Технологии слайд 5',
            'Технологии слайд 6',
            'Технологии слайд 7',
        ]
    },
    'midRight': {
        name: 'Кино', num: 2, from: 1987, to: 1991,
        slides: [
            'Кино слайд 1',
            'Кино слайд 2',
            'Кино слайд 3',
            'Кино слайд 4',
            'Кино слайд 5',
        ]
    },
    'botRight': {name: 'Литература', num: 3, from: 1992, to: 1997,
        slides: [
            'Литература слайд 1',
            'Литература слайд 2',
            'Литература слайд 3',
            'Литература слайд 4',
            'Литература слайд 5',
            'Литература слайд 6',
        ]
    },
    'botLeft': {name: 'Театр', num: 4, from: 1999, to: 2004,
        slides: [
            'Театр слайд 1',
            'Театр слайд 2',
            'Театр слайд 3',
            'Театр слайд 4',
            'Театр слайд 5',
            'Театр слайд 6',
        ]
    },
    'midLeft': {name: 'Спорт', num: 5, from: 2006, to: 2014,
        slides: [
            'Спорт слайд 1',
            'Спорт слайд 2',
            'Спорт слайд 3',
            'Спорт слайд 4',
            'Спорт слайд 5',
            'Спорт слайд 6',
            'Спорт слайд 7',
            'Спорт слайд 8',
            'Спорт слайд 9',
        ]
    },
    'topLeft': {name: 'Наука', num: 6, from: 2015, to: 2022,
        slides: [
            'Наука слайд 1',
            'Наука слайд 2',
            'Наука слайд 3',
            'Наука слайд 4',
            'Наука слайд 5',
            'Наука слайд 6',
            'Наука слайд 7',
            'Наука слайд 8',
        ]},
}