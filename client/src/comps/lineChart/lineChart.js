import { ComposedChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend } from 'recharts';
import moment from 'moment';

let LineChartComp = (props) => {
	props.data.forEach((d) => {
		d.time = moment(d.time).format('llll'); // date -> epoch
		d.hour = d.time.substr(17);
	});
	console.log(props.data);
	return (
		<ComposedChart width={600} height={500} data={props.data}>
			<Bar type='monotone' dataKey='average' fill='#9DD1F1' barSize={20} />
			<Line type='monotone' dataKey='max' stroke='#28E247' />
			<Line type='monotone' dataKey='median' stroke='#BA1200' />
			<Line type='monotone' dataKey='min' stroke='#8884d8' />
			<CartesianGrid stroke='#ccc' />
			<Legend />
			<XAxis dataKey='hour' />
			<YAxis />
			<Tooltip />
		</ComposedChart>
	);
};

export default LineChartComp;
