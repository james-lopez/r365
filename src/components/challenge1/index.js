import React, { Component } from 'react';
import styled from 'styled-components';

// TODO: export styled components to styles.js and reuse
const StyledCard = styled.div`
	background-color: #FFFFFF;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
	margin-top: 10px;
	border-radius: 3px;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

const StyledTitle = styled.h4`
	margin: 10px 0px 0px 10px;
`;

const StyledForm = styled.form`
	margin: 10px 0px 10px 12px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
`;

const StyledLabel = styled.label`
	text-transform: uppercase;
	font-size: 12px;
`;

const StyledInput = styled.input`
	margin-left: 10px;
`

const StyledButton = styled.button`
	height: 20px;
	margin-left: 10px;
	background: #01A8E2;
	border: 1px solid #01A8E2;
	border-radius: 3px;
	color: #EEE;
	font-size: 12px;
	text-transform: uppercase;
`;

const StyledResult = styled.p`
	font-size: 12px;
	margin: 0px 0px 0px 15px;
	padding: 3px 7px;
	background: #F4F4F4;
	border: 1px solid #F4F4F4;
	border-radius: 3px;
`;

class Challenge1 extends Component {
	constructor(props) {
		super(props)

		this.state = {
			text: '',
			output: ''
		}
	}

	handleInputChange = (e) => {
		this.setState({ text: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		
		let parsedString = this.state.text.split(',');

		if (parsedString.length < 2) {
			for (let i = parsedString.length; i < 2; i++) {
				parsedString.push('0');
			}
		}

		if (parsedString.length > 2) {
			this.setState({ output: 'Too Many Numbers' })
		} else {
			let convertedString = parsedString.map((number) => {
				if (isNaN(number) || number === '') {
					number = 0;
				} else {
					number = parseInt(number, 10);
				}

				return number;
			})
			
			let sum = convertedString.reduce((accumulator, currentValue) => {
				return accumulator + currentValue;
			});

			this.setState({ output: sum })
		}

	}
	
	render() {
	
		return (
			<StyledCard>
				<StyledTitle>Part 1: Support maximum of 2 numbers using a comma delimiter.</StyledTitle>
				<StyledForm onSubmit={(e) => this.handleSubmit(e)}>
					<StyledLabel>
						Input &#8594;
						<StyledInput data-testid="input" value={this.state.text} onChange={e => this.handleInputChange(e)} />
					</StyledLabel>
					<StyledButton data-testid="submit-button" type="submit">Calculate</StyledButton>
					<StyledResult data-testid="output-field">{this.state.output}</StyledResult>
				</StyledForm>
			</StyledCard>
		)
	}
}

export default Challenge1