import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { getTodosLoading, getCompletedTodos, getIncompleteTodos } from './selectors';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';

const ListWrapper = styled.div`
	max-width: 1024px;
    margin: auto;
`;

const PendenteStl = styled.p`
		font-size: 21px;
		font-weight: 700;
		text-align: center;
		color: red;
		padding-top: 20px;
`;

const CompletoStl = styled.p`
		font-size: 21px;
		font-weight: 700;
		text-align: center;
		padding-top: 20px;
`;

const PerIncompleto = styled.h3`
		font-size: 15px;
		color: red;
`;

const PerCompleto = styled.h3`
		font-size: 15px;
`;



const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <ListWrapper>
            <NewTodoForm />
            <PendenteStl>Não Respondido</PendenteStl>
		<PerIncompleto>
            {incompleteTodos.map(todo => <TodoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}/>)}
		</PerIncompleto>
            <CompletoStl>Respondido</CompletoStl>
		<PerCompleto>
            {completedTodos.map(todo => <TodoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}/>)}
		</PerCompleto>
        </ListWrapper>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);