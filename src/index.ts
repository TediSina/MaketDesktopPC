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

const parts = [
  {
    "title": "CPU: Central Processing Unit",
    "description": "Procesori kryesor i sistemit. Përpunon të gjitha udhëzimet e dhëna nga softueri dhe hardueri. Ndikon direkt në performancën e përgjithshme të kompjuterit."
  },
  {
    "title": "GPU: Graphics Processing Unit",
    "description": "Përgjegjës për përpunimin dhe paraqitjen e grafikave dhe vizualizimeve komplekse. E rëndësishme për lojëra, dizajn grafik dhe aplikacione të AI."
  },
  {
    "title": "RAM: Random Access Memory",
    "description": "Kujtesë afatshkurtër ku ruhen përkohësisht të dhënat që përdoren nga proceset aktive. Ndikon në shpejtësinë dhe aftësinë multitasking të sistemit."
  },
  {
    "title": "Motherboard",
    "description": "Komponenti qendror që lidh dhe koordinon të gjithë pjesët e tjera të sistemit. Përfshin porta, konektorë dhe rrugë elektrike për komunikim të ndërsjellë."
  },
  {
    "title": "Storage: SSD ose HDD",
    "description": "Pajisje për ruajtjen afatgjatë të të dhënave dhe skedarëve. SSD ofron shpejtësi më të lartë, ndërsa HDD ka kapacitet më të madh me kosto më të ulët."
  },
  {
    "title": "PSU: Power Supply Unit",
    "description": "Konverton energjinë elektrike nga rrjeti në energji DC që përdorin komponentët. Siguron furnizim të qëndrueshëm dhe të sigurt."
  },
  {
    "title": "Cooling System",
    "description": "Përfshin ventilatorët dhe/ose ftohësit me ujë për të mbajtur temperaturën e sistemit brenda kufijve të sigurt. Parandalon mbinxehjen dhe degradimin e performancës."
  },
  {
    "title": "Case",
    "description": "Një strukturë mbrojtëse që përmban dhe organizon komponentët e brendshëm. Siguron qasje të lehtë për përditësime dhe ventilim të mirë për ftohje."
  }
];

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

  const descriptionLabel = new GUI.TextBlock();
  descriptionLabel.text = part.description;
  descriptionLabel.color = "white";
  descriptionLabel.fontSize = "1.3%";
  descriptionLabel.textWrapping = true;
  descriptionLabel.resizeToFit = true;
  descriptionLabel.height = "60px";
  descriptionLabel.paddingBottom = "5px";
  guiPanel.addControl(descriptionLabel);

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
    console.log(`Shiko button clicked for: ${part.title}`);
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
