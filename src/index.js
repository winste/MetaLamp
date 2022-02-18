import './styles/index.scss'

const userProject = {
    name: 'MetaLamp',
    framework: 'React'
}

const user = {
    name: 'Ivan',
    age: 30,
    ...userProject
}

console.log(user);