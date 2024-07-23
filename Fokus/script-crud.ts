interface Tarefa {
    descricao: string
    concluida: boolean
}

interface EstadoAplicacao {
    tarefas: Tarefa[]
    tarefaSelecionada: Tarefa | null
}

let estadoInicial: EstadoAplicacao = {
    tarefas: [
        {
            descricao: 'Tarefa concluida',
            concluida: true
        },
        {
            descricao: 'Tarefa pendente 1',
            concluida: false
        },
        {
            descricao: 'Tarefa pendente 2',
            concluida: false
        }
    ],
    tarefaSelecionada: null
}
const selecionarTarefa = (estado: EstadoAplicacao, tarefa: Tarefa): EstadoAplicacao => {

    return {
        ...estado, 
        tarefaSelecionada: tarefa === estado.tarefaSelecionada ? null : tarefa
    }
}

const atualizarUI = () => {
    const ulTarefas = document.querySelector('.app__section-task-list')
    if(ulTarefas) {
        ulTarefas.innerHTML = ''
    }

    estadoInicial.tarefas.forEach(tarefas => {
        
    })
}