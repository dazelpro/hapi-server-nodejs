const { nanoid } = require('nanoid');

const addNoteHandler = (req, res) => {
    const { title, tags, body } = request.payload;
    const id = nanoid(16);
};

module.exports = { addNoteHandler };