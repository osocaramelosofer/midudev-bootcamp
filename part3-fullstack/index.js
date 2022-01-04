const express = require('express')
const app = express()

app.use(express.json())

app.use((request, response, next) => {
    console.log(request.method)
    console.log(request.path)
    console.log(request.body)
    console.log('------')
    next()
})

let notes = [
    {
        "id": 1,
        "content": "Tengo que estudiar",
        "important": false
    },
    {
        "id": 2,
        "content": "Tengo que estudiar",
        "important": false
    },
    {
        "id": 3,
        "content": "Tengo que estudiar",
        "important": false
    }
]

// Create a service
app.get('/', (request, response)=>{
    response.send('<h1>Hello world</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if(note){
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response)=>{
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(200).json(notes)
    response.status(204).end()

})

app.post('/api/notes', (request, response) =>{
    const note = request.body

    if(!note || !note.content){
        return response.status(400).json({
            error: 'note.content is missing'
        })
    }
    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)
    console.log(maxId)
    const newNote = {
        id: maxId + 1,
        content: note.content,
        important: typeof note.important !== 'undefined' ? note.important : false,
        date: new Date().toISOString()
    }

    notes = [...notes, newNote]
    response.status(200).json(newNote)
})

app.use((request, response)=>{
    console.log(request.path)
    response.status(404).json({
        error: 'Not found'
    })
})

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})