const { ipcRenderer } = require("electron");

function createFrame() {
  const frame = document.createElement("div");
  frame.classList.add("window-frame");
  frame.innerHTML = `
  <button class="minimize-button"></button>
  <button class="close-button"></button>
  `;
  document.body.appendChild(frame);
  const cssLink = document.createElement("link");
  cssLink.rel = "stylesheet";
  cssLink.href = "../../utils/frame.css";
  document.head.appendChild(cssLink);
  document.querySelector(".minimize-button").onclick = () => {
    ipcRenderer.send("minimize");
  };
  document.querySelector(".close-button").onclick = () => {
    ipcRenderer.send("close");
  };
}
createFrame();
