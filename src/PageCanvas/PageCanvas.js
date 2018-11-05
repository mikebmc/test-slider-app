import React, { Component } from 'react';
import { Group, Text, Arrow, Line, Rect, Layer, Stage } from 'react-konva';
import Portal from '../Portal/Portal';
import 'whatwg-fetch'

class PageCanvas extends Component {
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
		iwidth: window.innerWidth,
		iheight: window.innerHeight,
		width: window.innerWidth-100,
		height: 400,
		numberlines: [
			{
				numberOfSegments: 4,
				value:4,
				numberOfSegmentsLabel: this.segmentLabels[4],
			},
			{
				numberOfSegments: 5,
				value:5,
				numberOfSegmentsLabel: this.segmentLabels[5],
			},
		],
	};

	updateWindowDimensions = this.updateWindowDimensions

	componentDidMount = () => {
		this.updateWindowDimensions();
		//window.addEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({ 
			iwidth: window.innerWidth,
			iheight: window.innerHeight,
			width: window.innerWidth-100, 
		});
	}


	sliderHandlerTop = (event) => {
		let val = event.target.value
		this.setState({
			numberlines: [
				{
					numberOfSegments: val,
					value:val,
					numberOfSegmentsLabel: this.segmentLabels[val],
				},
				{
					numberOfSegments: 5,
					value:5,
					numberOfSegmentsLabel: this.segmentLabels[5],
				},
			],
		})
	}

	sliderHandlerBottom = (event) => {
		let val = event.target.value
		this.setState({
			numberlines: [
				{
					numberOfSegments: 4,
					value:4,
					numberOfSegmentsLabel: this.segmentLabels[4],
				},
				{
					numberOfSegments: val,
					value:val,
					numberOfSegmentsLabel: this.segmentLabels[val],
				},
			],
		})
	}

	answerHandlerYes = (event) => {
		let post = JSON.stringify({
			firstFraction: this.state.numberlines[0].numberOfSegmentsLabel,
			secondFraction: this.state.numberlines[1].numberOfSegmentsLabel,
			answer: 'yes',
		})
		console.log(post)
	}

	answerHandlerNo = (event) => {
		let post = JSON.stringify({
			firstFraction: this.state.numberlines[0].numberOfSegmentsLabel,
			secondFraction: this.state.numberlines[1].numberOfSegmentsLabel,
			answer: 'no',
		})
		console.log(post)
	}

	render() {
		return (
			<Stage 
				ref={node => {
					this.stage = node;
				}}
				width={this.state.width-100} 
				height={this.state.height}
			>
			<Layer>
				<Rect
					width={this.state.width-300}
					height={this.state.height}
					x={200}
					cornerRadius={45}
					stroke="cornflowerblue"
					strokeWidth={4}
				/>
			</Layer>
			<Layer>
				<MyNumberLine 
					x={this.state.width/2 - 300} 
					y={100} 
					fraction="1/4"
					value={this.state.numberlines[0].value}
					name="fourths"
					numberOfSegments={this.state.numberlines[0].numberOfSegments}
					numberOfSegmentsLabel={this.state.numberlines[0].numberOfSegmentsLabel}
					changed={this.sliderHandlerTop}
				/>
				<MyNumberLine 
					x={this.state.width/2 - 300} 
					y={200} 
					fraction="1/5"
					value={this.state.numberlines[1].value}
					name="fifths"
					numberOfSegments={this.state.numberlines[1].numberOfSegments}
					numberOfSegmentsLabel={this.state.numberlines[1].numberOfSegmentsLabel}
					changed={this.sliderHandlerBottom}
				/>
			</Layer>
			<Layer>
				<MyButton 
					title="Yes"
					changed={this.answerHandlerYes}
					x={this.state.width-270}
					y={this.state.height-70}
				/>
				<MyButton 
					title="No"
					changed={this.answerHandlerNo}
					x={this.state.width-200}
					y={this.state.height-70}
				/>
			</Layer>
			</Stage>
		)
	}
}

const MyNumberLine = (props) => {

	const rangeStyle = {
		left: props.x+235,
		top: props.y+180,
		position: "absolute"
	}

	return (
			<Group 
				x={props.x}
				y={props.y}
				height={200}
			>
				<MyFraction fraction={props.fraction}/>
				<MyBackGround />
				<MyArrow />
				<MySegments numberOfSegments={props.numberOfSegments}/>
				<MySegmentSquares numberOfSegments={props.numberOfSegments}/>
				<MyArrowLabels />
				<MyText numberOfSegmentsLabel={props.numberOfSegmentsLabel}/>
				<Portal>
					<input
						style={rangeStyle}
						className="numberline-slider"
						type="range"
						name={props.name}
						min={1}
						max={10}
						step={1}
						onChange={props.changed}
						defaultValue={props.value}
					/>
				</Portal>
			</Group>
	)
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
const MyButton = (props) => {
	return (
		<Group>
			<Rect
				fill="#dddddd"
				width={60}
				height={40}
				x={props.x}
				y={props.y}
				cornerRadius={5}
				stroke="cornflowerblue"
				strokeWidth={2}
			/>
			<Text
				align="center"
				width={60}
				fontFamily="Helvetica Neue"
				fontSize={28}
				text={props.title}
				stroke="black"
				strokeWidth={1}
				x={props.x}
				y={props.y+5}
				onClick={props.changed}
			/>
		</Group>
	)
}

export default PageCanvas
