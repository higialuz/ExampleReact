import React from 'react';
import styled from 'styled-components';

const HLItemContainer = styled.div`
	background: #fff;
    border-radius: 8px;
	border: 7px solid #f8f7fd; 
	font-size: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 1)
	? 'none'
	: '22px')};
	margin-top: 8px;
    padding: 16px;
    position: relative;
`;
const HigiluzButtonContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`;
const CompletedHigialuzBtn = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
    background-color: white;
	border: 1px solid red;
	color: red;
`;
const RemoveButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
    background-color: white;
	border: 0.5px solid #7767b7;
	color: #7767b7;
`;

const HLItemWithNotice = styled(HLItemContainer)`
	background-color: ${props => (new Date(props.createdAt) > new Date(Date.now() - 100 * 1)
	? 'none'
	: '#f2f0fb')};
	color: ${props => (new Date(props.createdAt) > new Date(Date.now() - 100 * 1)
	? 'none'
	: '#333333')};
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
	const Container = todo.isCompleted ? HLItemContainer : HLItemWithNotice;
	return ( 
    <Container createdAt={todo.createdAt}>
       <h3>{todo.text}</h3>
		<p>Criado em: &nbsp;
		{(new Date(todo.createdAt)).toLocaleDateString()}
		</p>
        <HigiluzButtonContainer>
            {todo.isCompleted
                ? null
                : <CompletedHigialuzBtn
                    onClick={() => onCompletedPressed(todo.id)}>PENDENTE</CompletedHigialuzBtn>}
            <RemoveButton
                onClick={() => onRemovePressed(todo.id)}>Excluir</RemoveButton>
        </HigiluzButtonContainer>
    </Container>
	);
}

export default TodoListItem;