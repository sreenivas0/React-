import React, { Component } from 'react';

export default class Todo extends Component {
	render() {
		return (
			<div>
				<div className='todo'>
					<p style={{ textDecoration: this.props.todo.complete ? 'line-through' : '' }}>
						{this.props.todo.title}
					</p>
					<div className='status'>
						<button className='complete' onClick={() => this.props.completeTodo(this.props.todo.id)}>
							Complete
						</button>
						<button className='delete' onClick={() => this.props.deleteTodo(this.props.todo.id)}>
							X
						</button>
					</div>
				</div>
			</div>
		);
	}
}
