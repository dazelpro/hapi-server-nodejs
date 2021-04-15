const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (req, res) => {
    const { title, tags, body } = req.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };
    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    const response = res.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
};

module.exports = { addNoteHandler };