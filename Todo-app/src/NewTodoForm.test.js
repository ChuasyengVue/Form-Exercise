import React from 'react';
import {render} from "@testing-library/react";
import NewTodoForm from './NewTodoForm';

// Smoke Test
it("renders without crashing", function() {
    render(<NewTodoForm />);
});

// Snapshot Test
it("matches snapshot", function() {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment).toMatchSnapshot();
});