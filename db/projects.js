const util = require("util");
var fs = require("fs");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Projects {
  constructor() {
    this.id = 0;
  }
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(project) {
    return writeFileAsync("db/db.json", JSON.stringify(project));
  }
  getProjects() {
    console.log("I'm getting projects f-n");
    return this.read().then(projects => {
      let structuredProjects = [];
      structuredProjects = structuredProjects.concat(JSON.parse(projects));
      console.log(structuredProjects);
      return structuredProjects;
    });
  }
  /* saveNote(note) {
    console.log("adding note");
    const { title, text } = note;
    const newNote = { title, text, id: ++this.id };
    return this.getNotes()
      .then(notes => [...notes, newNote])
      .then(updatedNotes => this.write(updatedNotes))
      .then(() => newNote);
  }
  deleteNote(id) {
    console.log("delete route");
    return this.getNotes()
      .then(notes => notes.filter(note => note.id !== parseInt(id)))
      .then(filteredNotes => this.write(filteredNotes));
  }*/
}
module.exports = new Projects();
