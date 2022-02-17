import './style.css'

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