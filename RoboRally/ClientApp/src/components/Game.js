import React, { Component } from 'react';
import Phaser from "phaser";
import logoImg from "../assets/logo.png";

export class Game extends Component {
	componentDidMount() {
		const config = {
			type: Phaser.AUTO,
			parent: "robo-rally-game",
			width: 800,
			height: 600,
			scene: {
				preload: preload,
				create: create
			}
		};

		const game = new Phaser.Game(config);

		function preload() {
			this.load.image("logo", logoImg);
		};

		function create() {
			const logo = this.add.image(400, 150, "logo");

			this.tweens.add({
				targets: logo,
				y: 450,
				duration: 2000,
				ease: "Power2",
				yoyo: true,
				loop: -1
			});
		};
	};

	render() {
		return (
			<div id="robo-rally-game"
				style={{
					display: 'flex',
					alignContent: 'center',
					justifyContent: 'center',
					flexDirection: 'row'
				}}
			>
			</div>
		)
	};
}
