import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { getName } from '../utils/userIdLocal';
import { Typography } from '@material-ui/core';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
function MyResponsivePie(props){
	const data = props.data.map(s => (
		s.amount > 0 && {
			"id": getName(s.user._id, s.user.name.full).split(" ")[0],
			"label": getName(s.user._id, s.user.name.full),
			"value": s.amount
		}
	))
	return (
	<>
    <ResponsivePie
			data={data}
			margin={{ right: 80, left: 80 }}
			innerRadius={0.6}
			padAngle={0.7}
			cornerRadius={2}
			colors={{ scheme: 'set2' }}
			borderWidth={1}
			borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
			radialLabelsSkipAngle={10}
			radialLabelsTextXOffset={6}
			radialLabelsTextColor="#333333"
			radialLabelsLinkOffset={0}
			radialLabelsLinkDiagonalLength={4}
			radialLabelsLinkHorizontalLength={1}
			radialLabelsLinkStrokeWidth={1}
			radialLabelsLinkColor={{ from: 'color' }}
			animate={true}
			motionStiffness={90}
			motionDamping={15}
    />
	</>
	)
}

export default MyResponsivePie;