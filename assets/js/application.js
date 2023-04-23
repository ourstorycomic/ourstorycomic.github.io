const { remote } = require('electron')

  // Minimize button
  document.querySelector('.minimize').addEventListener('click', () => {
    remote.getCurrentWindow().minimize()
  })

  // Maximize button
  document.querySelector('.maximize').addEventListener('click', () => {
    let win = remote.getCurrentWindow()
    if (win.isMaximized()) {
      win.unmaximize()
    } else {
      win.maximize()
    }
  })

  //Close button
  document.querySelector('.close').addEventListener('click', () => {
    remote.getCurrentWindow().close()
  })