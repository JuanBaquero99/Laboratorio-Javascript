//Ejercicio

const stringArray = ['apple', 'banana', 'orange', 'grape', 'banana', 'kiwi']
const target = 'banana'

function findStringIndicesInArray (array, target) {
    const result = {
        includesTarget: false,
        firstIndex: -1,
        lastIndex1: -1
    }

    array.forEach((element, index) => {
        if (element.includes(target)) {
            result.includesTarget = true
            result.firstIndex = index.indexOf(target)
            result.lastIndex1 = array.lastIndexOf(target)

        }
    })
    return result
}

const result = findStringIndicesInArray(stringArray, target)
console.log(result)