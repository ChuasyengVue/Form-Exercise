import React from 'react';
import {fireEvent, render} from "@testing-library/react";
import TodoList from './TodoList';

// Smoke Test
it("renders without crashing", function() {
    render(<TodoList />);
});

// Snapshot Test
it("matches snapshot", function() {
    const {asFragment} = render(<TodoList />);
    expect(asFragment).toMatchSnapshot();
});

// add Todo
it("add todo to task", function() {
    const todoList = render(<TodoList />)

    //click to add a todo task
    const addTodo = (todoList.getByText('Submit'));

    expect(addTodo).toBeInTheDocument();
});

// edit Todo
it("edit a todo task", function() {
    const todoList = render(<TodoList />);

    fireEvent.click(todoList.getByText('Submit'));

    // click to edit a todo
    const updateTodo = (todoList.getByText("Edit"));

    fireEvent.click(updateTodo);
    expect(updateTodo).toBeInTheDocument();
});

// remove Todo
it('removes a todo task', function() {
    const todoList = render(<TodoList />);

    fireEvent.click(todoList.getByText('Submit'));

    const removeTodo = (todoList.getByText('X'));

    fireEvent.click(removeTodo);
    expect(removeTodo).not.toBeInTheDocument();
})