import { Card, CardContent, Typography } from '@mui/material';

let TitleCard = () => {
	return (
		<Card>
			<CardContent>
				<Typography variant='h4'>Hello</Typography>
				My name is Harrison, this is my submission for the Hyperion Sensors Technical Assessment. <br />
				Please select how many timestamps you would like to view in the line chart below.
			</CardContent>
		</Card>
	);
};

export default TitleCard;
