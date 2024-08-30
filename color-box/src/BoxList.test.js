import React from 'react';
import {fireEvent, render} from "@testing-library/react";
import BoxList from './BoxList';

// Smoke Test
it('renders without crashing', function() {
    render(<BoxList />);
});

// Snapshot Test
it("matches snapshot", function() {
    const {asFragment} = render(<BoxList />);
    expect (asFragment).toMatchSnapshot();
});

// Add a new box
it("adds a new box to the list", function() {
    const boxList = render(<BoxList />);

    // click add a new box to add a box
    const addBox = (boxList.getByText('Add new box'));
    
    fireEvent.click(addBox);
    expect(addBox).toBeInTheDocument();
});

// Removes a box
it('removes a box from the list', function() {
    const boxList = render(<BoxList />);

    // click add a new box to add a box
    fireEvent.click(boxList.getByText('Add new box'));

    // click to remove a box
    const removeButton = boxList.getByText('x');

    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();

})