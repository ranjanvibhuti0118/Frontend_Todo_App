import React, {Component} from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import withNavigation from './withNavigation.jsx'   
import withParams from './withParameters.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './Login.jsx'
import HeaderComponent from './Header.jsx'
import ListTodosComponent from './ListTodos.jsx'
import WelcomeComponent from './Welcome.jsx'
import LogoutComponent from './Logout.jsx'
import FooterComponent from './Footer.jsx'
import ErrorComponent from './Error.jsx'
import TodoComponent from './TodoComponent.jsx'


class TodoApp extends Component {
	render() {
		const LoginComponentWithNavigation = withNavigation(LoginComponent);
		const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
		const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent) 
		const TodoComponentWithNavigation = withParams(TodoComponent) 
		const WelcomeComponentWithParams = withParams(WelcomeComponent);
		return (
			<div className="TodoApp">
			<Router>
			<HeaderComponentWithNavigation/>
			<Routes>
			
			<Route path="/" element={<LoginComponentWithNavigation />} />
			<Route path="/login" element={<LoginComponentWithNavigation />} />
			<Route path="/todos/:id" element={<AuthenticatedRoute>
				<TodoComponentWithNavigation /> 
				</AuthenticatedRoute>} />

			<Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>} />
			<Route path="/todos" element={<AuthenticatedRoute>
				<ListTodosComponentWithNavigation /> 
				</AuthenticatedRoute>} />
				
				<Route path="*" element={<ErrorComponent />} />
				<Route path="/logout" element={<AuthenticatedRoute>
					<LogoutComponent />
					</AuthenticatedRoute>} />
					
					</Routes>
					<FooterComponent></FooterComponent>
					</Router>
					</div>
					)
				}
			}

			export default TodoApp