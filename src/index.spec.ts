import { expect } from "./assertion";
import {sum} from './index.js'

const result_sum = sum([1,2,3])
const expected_sum = 6

expect(result_sum).toBe(expected_sum)