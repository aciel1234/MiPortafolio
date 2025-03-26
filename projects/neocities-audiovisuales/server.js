const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Sirve archivos estáticos

const COMMENTS_FILE = 'comments.txt';

// Cargar comentarios desde el archivo
function loadComments() {
    if (fs.existsSync(COMMENTS_FILE)) {
        return fs.readFileSync(COMMENTS_FILE, 'utf-8').split('\n').filter(Boolean).map(line => {
            const [nombre, comentario] = line.split('|');
            return { nombre, comentario };
        });
    }
    return [];
}

// Obtener comentarios
app.get('/comments', (req, res) => {
    const comments = loadComments();
    res.json(comments);
});

// Agregar comentario
app.post('/add-comment', (req, res) => {
    const { nombre, comentario } = req.body;
    fs.appendFileSync(COMMENTS_FILE, `${nombre}|${comentario}\n`);
    res.sendStatus(200);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});