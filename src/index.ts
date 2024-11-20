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
import { Inspector } from "@babylonjs/inspector";
import parts from "./parts";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
const engine = new Engine(canvas, true);
const scene = new Scene(engine);

const camera = new ArcRotateCamera("Camera", Math.PI / 1.25, Math.PI / 3, 7, new Vector3(0.5, 2, -3.5), scene);
camera.attachControl(canvas, true);
camera.wheelPrecision = 30;

const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);
light.intensity = 0.7;

SceneLoader.AppendAsync("", desktopPCPath, scene);

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

parts.forEach((part, index) => {
  const textLabel = new GUI.TextBlock();
  textLabel.text = part.title;
  textLabel.color = "white";
  textLabel.fontSize = "1.5%";
  textLabel.fontWeight = "bold";
  textLabel.textWrapping = true;
  textLabel.resizeToFit = true;
  textLabel.height = "60px";
  textLabel.paddingBottom = "5px";
  guiPanel.addControl(textLabel);

  const summaryLabel = new GUI.TextBlock();
  summaryLabel.text = part.summary;
  summaryLabel.color = "white";
  summaryLabel.fontSize = "1.3%";
  summaryLabel.textWrapping = true;
  summaryLabel.resizeToFit = true;
  summaryLabel.height = "60px";
  summaryLabel.paddingBottom = "5px";
  guiPanel.addControl(summaryLabel);

  const buttonGrid = new GUI.Grid();
  buttonGrid.addColumnDefinition(0.5);
  buttonGrid.addColumnDefinition(0.5);
  buttonGrid.width = "100%";
  buttonGrid.height = "30px";
  buttonGrid.paddingBottom = "10px";

  const shikoButton = GUI.Button.CreateSimpleButton(`shiko_button_${index}`, "Shiko");
  shikoButton.width = "90%";
  shikoButton.height = "100%";
  shikoButton.color = "white";
  shikoButton.cornerRadius = 10;
  shikoButton.background = "blue";
  shikoButton.onPointerClickObservable.add(() => {
    camera.alpha = part.camera.alpha;
    camera.beta = part.camera.beta;
    camera.radius = part.camera.radius;
    camera.target = new Vector3(...part.camera.target);
    camera.setPosition(new Vector3(part.camera.position[0], part.camera.position[1], part.camera.position[2]));
  });
  buttonGrid.addControl(shikoButton, 0, 0);

  const lexoButton = GUI.Button.CreateSimpleButton(`lexo_button_${index}`, "Lexo");
  lexoButton.width = "90%";
  lexoButton.height = "100%";
  lexoButton.color = "white";
  lexoButton.cornerRadius = 10;
  lexoButton.background = "green";
  lexoButton.onPointerClickObservable.add(() => {
    console.log(`Lexo button clicked for: ${part.title}`);
  });
  buttonGrid.addControl(lexoButton, 0, 1);

  guiPanel.addControl(buttonGrid);
});

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener("resize", () => {
  engine.resize();
});

window.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.shiftKey && event.ctrlKey && event.altKey && event.key === "D") {
      if (Inspector.IsVisible) {
        Inspector.Hide();
      } else {
        Inspector.Show(scene, {});
      }
  } else if (event.key === "r") {
    console.log(`Alpha: ${camera.alpha}\nBeta: ${camera.beta}\nRadius: ${camera.radius}\nTarget: ${camera.target}\nPosition: ${camera.position}`);
  }
});
