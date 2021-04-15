const express = require('express')
const routes = express.Router()
const views = __dirname + '/views/'

const password = 123456
const login = 'admin'




routes.post('/', (req,res)=>{
    if(req.body.password == password && req.body.login == login){
        req.session.login = login
        res.render(views + 'home', {login: login})
        console.log('meu usuario logado é:' + req.session.login)
        
        }else{
        res.render(views + 'index')
    }
})

routes.get('/', (req, res) => {
    if(req.session.login){
        res.render(views + 'home', {login: login})
    }else{
        res.render(views + '/')
    }
    
    })
    

module.exports = routes