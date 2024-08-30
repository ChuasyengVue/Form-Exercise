import React from 'react';
import {render} from "@testing-library/react";
import Todo from './Todo';

// Smoke Test
it("render without crashing", function() {
    render(<Todo />);
});

// Snapshot Test
it('matches snapshot', function() {
    const {asFragment} = render(<Todo />);
    expect(asFragment).toMatchSnapshot();
});