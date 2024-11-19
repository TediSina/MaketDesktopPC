import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  SceneLoader,
} from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import * as GUI from "@babylonjs/gui";
import desktopPCPath from "./assets/models/gaming_desktop_pc/scene.gltf";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
const engine = new Engine(canvas, true);
const scene = new Scene(engine);

const camera = new ArcRotateCamera("Camera", Math.PI / 1.25, Math.PI / 3, 7, new Vector3(0.5, 2, -3.5), scene);
camera.attachControl(canvas, true);

const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);
light.intensity = 0.7;

SceneLoader.AppendAsync("", desktopPCPath, scene, () => {
  console.log("Model loaded!");
});

const advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

const guiContainer = new GUI.Rectangle();
guiContainer.width = "25%";
guiContainer.height = "100%";
guiContainer.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
guiContainer.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiContainer.background = "purple";
guiContainer.cornerRadius = 20;
guiContainer.thickness = 0;
advancedTexture.addControl(guiContainer);

const guiPanel = new GUI.StackPanel();
guiPanel.width = "95%";
guiPanel.height = "95%";
guiPanel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiPanel.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiContainer.addControl(guiPanel);

const partsDescriptions = [
  "CPU: Central Processing Unit - Truri i kompjuterit.",
  "GPU: Graphics Processing Unit - Renderon grafikat dhe vizualet.",
  "RAM: Random Access Memory - Kujtesë afatshkurtër për akses të shpejtë.",
  "Motherboard: Lidh të gjithë komponentët së bashku.",
  "Storage: SSD ose HDD për ruajtje afatgjatë të të dhënave.",
  "PSU: Power Supply Unit - Ushqen të gjithë sistemin me energji elektrike DC.",
  "Cooling System: Parandalon mbinxehjen e sistemit.",
  "Case: Mbron dhe përmban komponentët.",
];

partsDescriptions.forEach((description) => {
  const label = new GUI.TextBlock();
  label.text = description;
  label.color = "white";
  label.fontSize = "1.75%";
  label.textWrapping = true;
  label.resizeToFit = true;
  label.height = "60px";
  label.paddingBottom = "5px";
  guiPanel.addControl(label);
});

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener("resize", () => {
  engine.resize();
});
