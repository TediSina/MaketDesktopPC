import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  SceneLoader,
  ISceneLoaderAsyncResult
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

const roomResult: Promise<ISceneLoaderAsyncResult> = SceneLoader.ImportMeshAsync("", "./", "stylised_room.glb", scene);
roomResult.then((result) => {
  result.meshes.forEach((mesh) => {
    mesh.scaling = new Vector3(3, 3, 3);
    mesh.position.x -= 17;
    mesh.position.y -= 7;
    mesh.position.z -= 9;
  });
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

const infoWindow = new GUI.Rectangle();
infoWindow.width = "75%";
infoWindow.height = "100%";
infoWindow.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
infoWindow.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
infoWindow.background = "rgba(0, 0, 0, 0.7)";
infoWindow.color = "white";
infoWindow.thickness = 2;
infoWindow.cornerRadius = 10;
infoWindow.isVisible = false;
advancedTexture.addControl(infoWindow);

const windowPanel = new GUI.StackPanel();
windowPanel.width = "95%";
windowPanel.height = "95%";
windowPanel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
windowPanel.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
infoWindow.addControl(windowPanel);

const infoTitle = new GUI.TextBlock();
infoTitle.text = "";
infoTitle.color = "white";
infoTitle.fontSize = "24px";
infoTitle.fontWeight = "bold";
infoTitle.paddingTop = "10px";
infoTitle.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
infoTitle.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
windowPanel.addControl(infoTitle);

const infoImage = new GUI.Image();
infoImage.width = "20%";
infoImage.height = "20%";
infoImage.paddingTop = "5%";
infoImage.source = "";
infoImage.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
infoImage.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
windowPanel.addControl(infoImage);

const infoPositionLabel = new GUI.TextBlock();
infoPositionLabel.text = "Pozicionimi:";
infoPositionLabel.color = "white";
infoPositionLabel.fontSize = "18px";
infoPositionLabel.fontWeight = "bold";
infoPositionLabel.paddingTop = "20%";
infoPositionLabel.paddingBottom = "0.5%";
infoPositionLabel.textWrapping = true;
infoPositionLabel.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
infoPositionLabel.resizeToFit = true;
windowPanel.addControl(infoPositionLabel);

const infoPosition = new GUI.TextBlock();
infoPosition.text = "";
infoPosition.color = "white";
infoPosition.fontSize = "18px";
infoPosition.paddingTop = "1%";
infoPosition.textWrapping = true;
infoPosition.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
infoPosition.resizeToFit = true;
windowPanel.addControl(infoPosition);

const infoDescriptionLabel = new GUI.TextBlock();
infoDescriptionLabel.text = "Përshkrimi:";
infoDescriptionLabel.color = "white";
infoDescriptionLabel.fontSize = "18px";
infoDescriptionLabel.fontWeight = "bold";
infoDescriptionLabel.paddingTop = "1.5%";
infoDescriptionLabel.paddingBottom = "0.5%";
infoDescriptionLabel.textWrapping = true;
infoDescriptionLabel.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
infoDescriptionLabel.resizeToFit = true;
windowPanel.addControl(infoDescriptionLabel);

const infoDescription = new GUI.TextBlock();
infoDescription.text = "";
infoDescription.color = "white";
infoDescription.fontSize = "18px";
infoDescription.paddingTop = "1%";
infoDescription.textWrapping = true;
infoDescription.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
infoDescription.resizeToFit = true;
windowPanel.addControl(infoDescription);

const infoInteroperabilityLabel = new GUI.TextBlock();
infoInteroperabilityLabel.text = "Ndërlidhja me komponentët e tjerë:";
infoInteroperabilityLabel.color = "white";
infoInteroperabilityLabel.fontSize = "18px";
infoInteroperabilityLabel.fontWeight = "bold";
infoInteroperabilityLabel.paddingTop = "1.5%";
infoInteroperabilityLabel.paddingBottom = "0.5%";
infoInteroperabilityLabel.textWrapping = true;
infoInteroperabilityLabel.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
infoInteroperabilityLabel.resizeToFit = true;
windowPanel.addControl(infoInteroperabilityLabel);

const infoInteroperability = new GUI.TextBlock();
infoInteroperability.text = "";
infoInteroperability.color = "white";
infoInteroperability.fontSize = "18px";
infoInteroperability.paddingTop = "1%";
infoInteroperability.textWrapping = true;
infoInteroperability.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
infoInteroperability.resizeToFit = true;
windowPanel.addControl(infoInteroperability);

const infoPerformanceLabel = new GUI.TextBlock();
infoPerformanceLabel.text = "Ndikimi në performancën e kompjuterit:";
infoPerformanceLabel.color = "white";
infoPerformanceLabel.fontSize = "18px";
infoPerformanceLabel.fontWeight = "bold";
infoPerformanceLabel.paddingTop = "1.5%";
infoPerformanceLabel.paddingBottom = "0.5%";
infoPerformanceLabel.textWrapping = true;
infoPerformanceLabel.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
infoPerformanceLabel.resizeToFit = true;
windowPanel.addControl(infoPerformanceLabel);

const infoPerformance = new GUI.TextBlock();
infoPerformance.text = "";
infoPerformance.color = "white";
infoPerformance.fontSize = "18px";
infoPerformance.paddingTop = "1%";
infoPerformance.textWrapping = true;
infoPerformance.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
infoPerformance.resizeToFit = true;
windowPanel.addControl(infoPerformance);

const infoImportanceLabel = new GUI.TextBlock();
infoImportanceLabel.text = "Rëndësia:";
infoImportanceLabel.color = "white";
infoImportanceLabel.fontSize = "18px";
infoImportanceLabel.fontWeight = "bold";
infoImportanceLabel.paddingTop = "1.5%";
infoImportanceLabel.paddingBottom = "0.5%";
infoImportanceLabel.textWrapping = true;
infoImportanceLabel.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
infoImportanceLabel.resizeToFit = true;
windowPanel.addControl(infoImportanceLabel);

const infoImportance = new GUI.TextBlock();
infoImportance.text = "";
infoImportance.color = "white";
infoImportance.fontSize = "18px";
infoImportance.paddingTop = "1%";
infoImportance.textWrapping = true;
infoImportance.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
infoImportance.resizeToFit = true;
windowPanel.addControl(infoImportance);

const closeButton = GUI.Button.CreateSimpleButton("close_button", "Mbylle");
closeButton.width = "20%";
closeButton.height = "50px";
closeButton.color = "white";
closeButton.cornerRadius = 10;
closeButton.background = "red";
closeButton.paddingTop = "1.25%";
closeButton.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
closeButton.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
closeButton.onPointerClickObservable.add(() => {
  infoWindow.isVisible = false;
});
windowPanel.addControl(closeButton);

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

  const infoButton = GUI.Button.CreateSimpleButton(`info_button_${index}`, "Info");
  infoButton.width = "90%";
  infoButton.height = "100%";
  infoButton.color = "white";
  infoButton.cornerRadius = 10;
  infoButton.background = "green";
  infoButton.onPointerClickObservable.add(() => {
    if (infoWindow.isVisible) {
      infoWindow.isVisible = false;
    } else {
      infoImage.source = part.info.imageURI;
      infoTitle.text = part.title;
      infoPosition.text = part.info.physicalPosition;
      infoDescription.text = part.info.description;
      infoInteroperability.text = part.info.interoperability;
      infoPerformance.text = part.info.performance;
      infoImportance.text = part.info.importance;
      infoWindow.isVisible = true;
    }
  });
  buttonGrid.addControl(infoButton, 0, 1);

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
