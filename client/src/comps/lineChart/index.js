/*-------------------------------------File Imports---------------------------------- */
import React, { useEffect, useState } from 'react';
import LineChartComp from './lineChart';
import Dropdown from '../dropdown';
/*-------------------------------------MUI Imports---------------------------------- */
import { Grid, Box } from '@mui/material';
import { ToggleButton, ToggleButtonGroup, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

//Import axios library to handle api requests
const axios = require('axios');

function LineChart(props) {
	const [data, setData] = useState([]);
	const [lines, setLines] = React.useState(3);
	const [base, setBase] = React.useState('');

	const handleChange = (event) => {
		setLines(event.target.value);
	};

	const handleDropChange = (event) => {
		setBase(event.target.value);
	};

	useEffect(() => {
		axios
			.post('http://localhost:3001/api/temperature/latest/', {
				base: base,
				limit: lines,
			})
			.then((response) => {
				setData(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, [lines, base]);

	return (
		<Grid container direction='column' alignItems='center'>
			<Grid item>
				<FormControl style={{ minWidth: 650 }}>
					<InputLabel variant='outlined' id='demo-simple-select-label'>
						Data
					</InputLabel>
					<Select labelId='demo-simple-select-label' id='demo-simple-select' value={base} label='Age' onChange={handleDropChange}>
						<MenuItem value={'data1'} key='data1'>
							Dataset 1
						</MenuItem>
						<MenuItem value={'data2'} key='data2'>
							Dataset 2
						</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid container item direction='row' justifyContent='center' alignItems='center'>
				<Grid item xs={1}>
					<Box
						sx={{
							display: 'flex',
							'& > *': {
								m: 1,
							},
						}}
					>
						<Paper elevation={3}>
							<ToggleButtonGroup orientation='vertical' aria-label='vertical contained ToggleButton group' variant='contained' style={{ 'margin': 5, 'backgroundColor': '#B9F3E6' }} onChange={handleChange}>
								<ToggleButton key='one' value={'3'}>
									3
								</ToggleButton>
								<ToggleButton key='two' value={'10'}>
									10
								</ToggleButton>
								<ToggleButton key='three' value={'20'}>
									20
								</ToggleButton>
							</ToggleButtonGroup>
						</Paper>
					</Box>
				</Grid>
				<Grid item spacing={3} direction='column' xs={11}>
					<LineChartComp data={data} />
				</Grid>
			</Grid>
		</Grid>
	);
}

export default LineChart;
