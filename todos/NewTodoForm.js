import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors';
import { addTodoRequest } from './thunks';
import styled from 'styled-components';

const NewHigialuzForm = styled.div`
	border-radius: 8px;
    padding: 16px;
    text-align: center;
    border: 0.5px solid #ddd;
`;

const NewHigialuzInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`;

const HigialuzBtn = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`;	

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <NewHigialuzForm>
            <NewHigialuzInput
                type="text"
                placeholder="Pergunte aqui"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <HigialuzBtn
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }}}>Perguntar</HigialuzBtn>
        </NewHigialuzForm>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);