import React, { useState } from 'react';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';

let Dropdown = () => {
	const [base, setBase] = React.useState('');

	const handleChange = (event) => {
		setBase(event.target.value);
	};

	return (
		<FormControl style={{ minWidth: 650 }}>
			<InputLabel variant='outlined' id='demo-simple-select-label'>
				Data
			</InputLabel>
			<Select labelId='demo-simple-select-label' id='demo-simple-select' value={base} label='Age' onChange={handleChange}>
				<MenuItem value={'data1'} key='data1'>
					Dataset 1
				</MenuItem>
				<MenuItem value={'data2'} key='data2'>
					Dataset 2
				</MenuItem>
			</Select>
		</FormControl>
	);
};

export default Dropdown;
