import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actionTypes from '../store/action/action';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
	render () {
		const {
			persons,
			_personAddedHandler,
			_personDeletedHandler
		} = this.props;
		console.log(actionTypes);
		return (
			<div>
				<AddPerson personAdded={_personAddedHandler} />
				{persons.map(person => (
					<Person 
						key={person.id}
						name={person.name} 
						age={person.age} 
						clicked={() => _personDeletedHandler(person.id)}/>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		persons: state.persons
	}
};

const mapDispatchToProps = dispatch => {
	return {
		_personAddedHandler: () => dispatch({type: actionTypes.ADD_PERSON}),
		_personDeletedHandler: (id) => dispatch({type: actionTypes.DELETE_PERSON, payload: id}),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);