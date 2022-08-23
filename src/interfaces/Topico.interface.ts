export interface ITopico {
    status: string,
    message: string,
    data: {
        id: number,
        topico: string
    }[]    
}

export interface ITopicoServe {
    id: number,
    topico: string
}

export interface ITopicoState {
    id: number,
    name: string
}