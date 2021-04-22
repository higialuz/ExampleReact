import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList';
import styled from 'styled-components';

const HluzStyleContainer = styled.div`    
	margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
`;

const App = () => (
    <HluzStyleContainer>
	<div align="center">
	<p>LOGO + NAVIGATION</p>
	</div>	
    <TodoList />
    </HluzStyleContainer>
);

export default hot(module)(App);