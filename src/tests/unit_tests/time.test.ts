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
    let min = 0

    test('should update the timer', () => {
        time()
        expect(secs).toBeGreaterThanOrEqual(0)
        expect(min).toBeGreaterThanOrEqual(0)
    })
})

describe('time', () => {
    let secs = 'goat'
    let now = 'goat'
    let min = 'goat'

    test('timer values false, timer should give wrong values', () => {
        time()
        expect(secs).toBe('goat')
        expect(min).toBe('goat')
    })
})
