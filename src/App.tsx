import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DemoSimple from './diagrams/DemoSimple';
import DemoAnimation from './diagrams/DemoAnimation'
import Listeners from './diagrams/Listeners'

import Links from './Links'
import styled from '@emotion/styled';

export default () => {

	const FlexContainer = styled.div`
		height: 100vh;
		width: 100vw;
		display: flex;
	`;

	return (
		<Router>
			<FlexContainer>
				<Links/>
				<Switch>
					<Route exact={true} path={"/"} component={DemoSimple} />
					<Route path={"/animation"} component={DemoAnimation} />
					<Route path={"/listeners"} component={Listeners} />
				</Switch>
			</FlexContainer>
		</Router>
	)
}
