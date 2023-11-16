export const dataState = {
pages:[
    {
        heading:'Цикл while',
        about:' Цикл while имеет следующий синтаксис'
    },
    {
        heading:'for',
        about:' for имеет следующий синтаксис'
    },
    {
        heading:'Конструкция \"switch"',
        about:' Конструкция  switch заменяет собой сразу несколько IF'
    },
]

    

   
}

export type dataStateType={
pages:PageType[]
}

export type PageType  = {
    heading:string
    about:string
}