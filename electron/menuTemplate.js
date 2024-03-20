const { exec } = require('child_process')
const { app, dialog, Notification } = require('electron')
module.exports = [
    {
        label: 'Microsoft Edge',
        submenu: [
            {
                label: 'Nova Guia',
                click: () => { exec('start msedge') }
            },
            {
                label: 'Nova Guia inPrivate',
                click: () => { exec('start msedge.exe "" -inprivate') },
            }
        ]
    },
    {
        label: 'VS Code',
        submenu: [
            {
                label: 'Abrir VS Code',
                click: () => { exec('code') }
            },
            {
                label: 'Abrir Projeto...',
                click: () => {
                  let path
                  try {
                    path = dialog.showOpenDialogSync({ properties: ['openDirectory'] }).toString()
                    exec(`code "${path}"`)
                  } catch (error) {
                    new Notification({
                      title: 'Erro',
                      body: 'Nenhum arquivo foi selecionado.'
                    }).show()
                  }
                }
            }
        ]
    },
    {
        label: 'Prompt de Comando',
        submenu: [
            {
                label: 'Novo Terminal',
                click: () => { exec('start cmd',) }
            }
        ]
    }, {
        label: 'Configurações',
        submenu: [
            { label: 'Linguagem' },
            { label: 'Procurar Atualizações' },
            { label: 'Sobre o Projeto' },
            { label: 'Ajuda' }
        ],
        enabled: false,
    },
    { type:'separator'},
    {
        label: 'Sair',
        click: () => { app.quit() }
    }
]
