import { difference } from "lodash"

export function arrayDiffMessage(arrayOne, arrayTwo) {
    const diff = difference(arrayOne, arrayTwo)

    return `The difference between [${arrayOne}] and [${arrayTwo}] is [${diff}].`
}