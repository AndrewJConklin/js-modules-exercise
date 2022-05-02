import { arrayDiffMessage } from "../utilities/difference"

const arrayOne = [1, 2, 3]
const arrayTwo = [2, 3, 4]


const message = arrayDiffMessage(arrayOne, arrayTwo)

const $p = document.querySelector("#target")

$p.textContent = message 