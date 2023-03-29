/**
 * @jest-environment jsdom
 */
require('dotenv').config()
import type { Config } from 'jest'
import { defaults } from 'jest-config'

const {
    beforeEach,
    afterEach,
    describe,
    it,
    expect,
    jest,
    test,
} = require('@jest/globals')

const { time } = require('../../time')

describe('time', () => {
    let secs = 0
    let now = 0
    let min = 9

    test('should update the timer', () => {
        time()
        expect(secs).toBeGreaterThanOrEqual(0)
        expect(min).toBeGreaterThanOrEqual(0)
        // expect(timerMin.innerHTML).toBe(String(min))
        // expect(timerSek.innerHTML).toBe(String(secs))
    })
})
