import React from 'react';

import auth_reducer from './auth_reducer/'

test("test", () => {

  let newState = auth_reducer(state, action);
  console.log(newState)
  expect(newState.lenght).toBe(1);
})
it("@@@@@@@test", () => {
    expect(3).toEquil(3);
})


test("it should filter by a search term (link)", () => {
  const input = [
    { id: 1, url: "https://www.url1.dev" },
    { id: 2, url: "https://www.url2.dev" },
    { id: 3, url: "https://www.link3.dev" }
  ];

  const output = [{ id: 3, url: "https://www.link3.dev" }];

  expect(filterByTerm(input, "link")).toEqual(output);

});