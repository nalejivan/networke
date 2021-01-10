import news_reducer, { addPostActionCreator, delPostActionCreater } from './news_reducer'
import React from 'react';


let initialState = {
  arr: [
    {id: 1, text: 'Прекрасная погода, светит солнце! Хочу пиво!'},
    {id: 2, text: 'Темное пиво и чипысы, члучше чем кодить!'}
  ]
}
it('NEW POST SHOULD BE ADDED', () => {
    let action = addPostActionCreator('IT-KAMASUTRA.COM');
    let newState = news_reducer(initialState, action);
    expect(newState.arr.length).toBe(3)
})
it('POST SHOULD BE DEL', () => {
  let action = delPostActionCreater(1);
  let newState = news_reducer(initialState, action);
  expect(newState.arr.length).toBe(2);
})