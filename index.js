// import json server package
const jsonserver=require('json-server')

// create jsonserver
const server=jsonserver.create()

//create middleware
const middleware=jsonserver.defaults()

const router=jsonserver.router("db.json")

//create port for backend
const PORT=process.env.PORT||4000

server.use(middleware)

server.use(router)

server.listen(PORT, ()=>{
    console.log('media player started at port:'+PORT);
})