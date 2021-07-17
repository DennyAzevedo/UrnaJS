/*
=========================================================================
Nome do Projeto: Simulador da Urna Eletrônica
Finalidade: Cursos de Informática do IFSP campus Caraguatatuba
Fonte Base: Projetos do Curso B7Web - https://b7web.com.br/
Autores: Marilene Esquiavoni & Denny Paulista Azevedo Filho
License: MIT License
=========================================================================
*/

//Dados no formato JSON
let etapas = [
    {
        titulo: 'VEREADOR',
        numeros: 5,
        candidatos: [
            {
                numero: '77111',
                nome: 'Optimus Prime',
                partido: 'PA',
                fotos: [
                    {url:'77111.png', legenda: 'Vereador'}
                ]
            },
            {
                numero: '84001',
                nome: 'Mestre Yoda',
                partido: 'PRE',
                fotos: [
                    {url:'84001.png', legenda: 'Vereador'}
                ]
            },
            {
                numero: '88001',
                nome: 'Neil Matriz',
                partido: 'PJM',
                fotos: [
                    {url:'88001.png', legenda: 'Vereador'}
                ]
            },
            {
                numero: '90111',
                nome: 'Hellboy',
                partido: 'PMI',
                fotos: [
                    {url:'90111.png', legenda: 'Vereador'}
                ]
            },
            {
                numero: '95001',
                nome: 'Juiz Dredd',
                partido: 'PLJ',
                fotos: [
                    {url:'95001.png', legenda: 'Vereador'}
                ]
            },
            {
                numero: '99001',
                nome: 'Dart Maul',
                partido: 'PVL',
                fotos: [
                    {url:'99001.png', legenda: 'Vereador'}
                ]
            }
        ]
    },
    {
        titulo: 'PREFEITO',
        numeros: 2,
        candidatos: [
            {
                numero: '84',
                nome: 'Leia Skywalker',
                partido: 'PRE',
                vice: 'Mulher Maravilha',
                fotos: [
                    {url:'84.png', legenda: 'Prefeito'},
                    {url:'84_2.png', legenda: 'Vice-Prefeito', small: true}
                ]
            },
            {
                numero: '88',
                nome: 'Batman',
                partido: 'PJM',
                vice: 'Robin',
                fotos: [
                    {url:'88.png', legenda: 'Prefeito'},
                    {url:'88_2.png', legenda: 'Vice-Prefeito', small: true}
                ]
            },
            {
                numero: '95',
                nome: 'Capitão America',
                partido: 'PPLJ',
                vice: 'Homem de Ferro',
                fotos: [
                    {url:'95.png', legenda: 'Prefeito'},
                    {url:'95_2.png', legenda: 'Vice-Prefeito', small: true}
                ]
            },
            {
                numero: '99',
                nome: 'Coringa',
                partido: 'PVL',
                vice: 'Dart Vader',
                fotos: [
                    {url:'99.png', legenda: 'Prefeito'},
                    {url:'99_2.png', legenda: 'Vice-Prefeito', small: true}
                ]
            }
        ]
    }
];
