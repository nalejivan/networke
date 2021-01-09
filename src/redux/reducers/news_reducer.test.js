import news_reducer, { addPostActionCreator } from './news_reducer'
import React from 'react';

it('NEW POST SHOULD BE ADDED', () => {
    let action = addPostActionCreator('IT-KAMASUTRA.COM');
    const initialState = {
        arr: [
          {text: 'Прекрасная погода, светит солнце! Хочу пиво!'},
          {text: 'Темное пиво и чипысы, члучше чем кодить!'}
        ]
      }
    let newState = news_reducer(initialState, action);
    expect(newState.arr.length === 3)
})