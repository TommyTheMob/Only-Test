const indexAngles = {
    0: 60,
    1: 120,
    2: 180,
    3: -120,
    4: -60,
    5: 0
}

const dots = ['topLeft', 'midLeft', 'botLeft', 'botRight', 'midRight', 'topRight']

export const getAngle = (dotName: string): null | number => {
    let index = dots.indexOf(dotName)
    if (index === -1) return null

    while (dots.indexOf(dotName) !== dots.length - 1) {
        let temp = dots.shift()
        dots.push(temp)
    }

    return indexAngles[index as keyof typeof indexAngles]
}