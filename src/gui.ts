import * as PIXI from "pixi.js";
const { Text } = PIXI;
const rgbColor = PIXI.utils.rgb2hex;

const Layer = PIXI.Container;

const gui = new Layer();
gui.height = 600;
gui.width = 800;
gui.interactive = true;
gui.addChild(new Text("gui layer"));
