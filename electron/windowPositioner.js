function windowPositioner (tray, win) {
  const trayBounds = tray.getBounds();
  const winSize = win.getSize();
  if (!win.isVisible()) {
    win.show();
    win.setPosition(trayBounds.x - (winSize[0] / 2), trayBounds.y - winSize[1]);
  } else {
    win.hide();
  }
}

module.exports = windowPositioner;
