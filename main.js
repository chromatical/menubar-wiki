var menubar = require('menubar')

const {Menu} = require('electron')
const {dialog} = require('electron')

let t = null
var mb = menubar({preloadWindow:true,height:46,width:300,alwaysOnTop:true,icon:__dirname+'/icon.png'})

mb.on('ready', function ready () {
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Search Wikipedia', click(){
      mb.showWindow()
      mb.window.focus()
      }
    },
    {label: 'Credits', click(){
      dialog.showMessageBox({type:'info',buttons:['Close'],title:'About Menubar Wiki',message:'A simple menubar app for browsing Wikipedia.\nCopyright (c) 2016 James King\nhttp://chromaticaldesign.com'})
      }
    },
    {label: 'Quit', click(){
      mb.app.quit()
      }
    }
  ])
  mb.tray.setContextMenu(contextMenu)
  mb.window.setResizable(false)
})
