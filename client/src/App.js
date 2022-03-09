import Dropdown from './comps/dropdown';
import LineChart from './comps/lineChart';
import TitleCard from './comps/titleCard';

/*-------------------------------------MUI Imports---------------------------------- */
import { Grid, Box } from '@mui/material';

function App() {
	return (
		<Grid container direction='column' spacing={4} justifyContent='center' alignItems='center' style={{ 'margin': 10 }}>
			<Grid item xs={12}>
				<TitleCard />
			</Grid>
			<Grid item>
				<LineChart />
			</Grid>
		</Grid>
	);
}

export default App;
