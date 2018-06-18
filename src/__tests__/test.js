import {color} from './Reducers/ColroReducer.js';

describe('color Reducer', () => {
    it('ADD_COLOR success', () => {
        const state = {}
        const action = {
            type: 'ADD_COLOR',
            id: 0,
            title: 'Test Teal',
            color: '#90c3d4',
            timeStamp: new Date().toString()
        }
        const result = color(state, action)
        expect(results)
            .toEqual({
                type: 'ADD_COLOR',
                id: 0,
                title: 'Test Teal',
                color: '#90c3d4',
                timeStamp: action.timeStamp,
                rating: 0
            })
    })

    it('RATE_COLOR success', () => {
        const state = {
            id: 0,
            title: 'Test Teal',
            color: '#90C3D4',
            timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
            rating: undefined
        }
        const action = {
            type: C.RATE_COLOR,
            id: 0,
            rating: 3
        }
        const  result = color(state, action)
        expect(results)
            .toEqual({
                id: 0,
                title: 'Test Teal',
                color: '#90C3D4',
                timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                rating: 3
            })
    })
})