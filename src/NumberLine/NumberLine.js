import React, { Component } from 'react';
import { Rect, Arrow, Line, Group, Text } from 'react-konva';
import Portal from '../Portal/Portal';

class NumberLine extends Component {
	// "zeroths" is a placeholder, so that indexes match divisions
	segmentLabels = [
		"zeroths",
		"whole",
		"halves",
		"thirds",
		"fourths",
		"fifths",
		"sixths",
		"sevenths",
		"eighths",
		"ninths",
		"tenths"
	]

	state = {
		numberOfSegments: this.props.value,
		value: this.props.value,
		numberOfSegmentsLabel: this.segmentLabels[this.props.value]
	}

	sliderHandler = (event) => {
		this.setState({
			numberOfSegments: event.target.value,
			value: event.target.value,
			numberOfSegmentsLabel: this.segmentLabels[event.target.value]
		})
	}

	rangeStyle = {
		left: this.props.x+235,
		top: this.props.y+180,
		position: "absolute"
	}

	render() {
		return (
			<Group 
				x={this.props.x}
				y={this.props.y}
				height={ 200 }
			>
				<MyFraction fraction={this.props.fraction}/>
				<MyBackGround />
				<MyArrow />
				<MySegments numberOfSegments={this.state.numberOfSegments}/>
				<MySegmentSquares numberOfSegments={this.state.numberOfSegments}/>
				<MyArrowLabels />
				<MyText numberOfSegmentsLabel={this.state.numberOfSegmentsLabel}/>
				<Portal>
					<input
						style={this.rangeStyle}
						className="numberline-slider"
						type="range"
						name={this.props.name}
						min={1}
						max={10}
						step={1}
						onChange={ this.sliderHandler }
						defaultValue={this.state.value}
					/>
				</Portal>
			</Group>
		)
	}
}

const MyFraction = (props) => {
	return (
		<Text
			align="center"
			width={50}
			fontFamily="Helvetica Neue"
			fontSize={28}
			text={props.fraction}
			stroke="grey"
			strokeWidth={1}
			x={-75}
			y={7}
		/>
	)
}

const MyBackGround = () => {
	return (
		<Rect
			height={200}
			width={600}
		/>
	)
}

const MyArrow = () => {
	return (
		<Arrow
			points={[0, 20, 600, 20]}
			stroke="black"
			strokeWidth={5}
			pointerAtBeginning="true"
		/>
	)
}

const MyArrowLabels = () => {
	return (
		<Line
			sceneFunc= { 
				function (ctx) {
					ctx.beginPath();
					ctx.strokeStyle = 'black';
					ctx.lineWidth = 3;
					ctx.moveTo(30, 20 - 15);
					ctx.lineTo(30, 20 + 15);
					ctx.fill();
					ctx.stroke();
					ctx.beginPath();
					ctx.strokeStyle = 'black';
					ctx.lineWidth = 3;
					ctx.moveTo(570, 20 - 15);
					ctx.lineTo(570, 20 + 15);
					ctx.font = "20px Helvetica Neue";
					ctx.fillText(0, 25, 55);
					ctx.fillText(1, 565, 55);
					ctx.fill();
					ctx.stroke();
				}
			}
		/>
	)
}

const MySegments = (props) => {
	let segmentLength = 540/props.numberOfSegments
	return (
		<Line
			sceneFunc={
				function (ctx) {
					for(var i = segmentLength+30; i <= 570-segmentLength; i = i+segmentLength) {
						ctx.beginPath();
						ctx.strokeStyle = 'black';
						ctx.lineWidth = 3;
						ctx.moveTo(i, 20 - 10);
						ctx.lineTo(i, 20 + 10);
						ctx.fill();
						ctx.stroke();
					}
				}
			}
		/>
	)
}

const MySegmentSquares = (props) => {
	return (
		<Rect 
		/>
	)
}

const MyText = (props) => {
	return (
		<Text
			align="center"
			width={150}
			fontFamily="Helvetica Neue"
			fontSize={28}
			text={props.numberOfSegmentsLabel}
			stroke="grey"
			strokeWidth={1}
			x={225}
			y={45}
		/>
	)
}

export default NumberLine;
