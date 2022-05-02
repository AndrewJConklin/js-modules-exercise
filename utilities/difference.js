import { difference } from "lodash"

export function arrayDiffMessage(arrayOne, arrayTwo) {
    const diff = difference(arrayOne, arrayTwo)
    const reverseDiff = difference(arrayTwo, arrayOne)

    return `The difference between [${arrayOne}] and [${arrayTwo}] is [${diff}] and the difference between [${arrayTwo}] and [${arrayOne}] is [${reverseDiff}].`
}