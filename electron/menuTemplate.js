const { exec } = require('child_process')
const { log } = require('console')
const { app, dialog } = require('electron')
module.exports = [
    {
        label: 'JSON Server',
        submenu: [
            {
                label: 'Iniciar Servidor Local'
            },
            {
                label: 'Parar Servidor Local'
            },
            {
                label: 'Configurações JSON Server'
            }
        ],
        enabled: false
    },
    {
        label: 'Microsoft Edge',
        submenu: [
            {
                label: 'Nova Guia',
                click: () => { exec('start msedge') }
            },
            {
                label: 'Nova Guia inPrivate',
                click: () => { exec('start msedge -–inprivate') },
                enabled: false,
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
                    exec(`code "${dialog.showOpenDialogSync({ properties: ['openDirectory'] }).toString()}"`)
                }
            }
        ]
    },
    {
        label: 'Prompt de Comando',
        submenu: [
            {
                label: 'Novo Terminal',
                click: () => { exec('start cmd') }
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
    {
        label: 'Sair',
        click: () => { app.quit() }
    }
]
