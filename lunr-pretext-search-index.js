var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Task Bug Example",
  "body": " Task Bug Example  Example of trying to use fill-in exercise inside of task. The fill-in does not render the blank or \"Check Me\" button when used in a task. However, when the same code is used not in a task it renders correctly.   Exercise Title  Exercise introduction.  Task A Title  Task a statement.  Fill-in in a Task  Statement goes here with a blank.      There is no right answer ;)     Task C Title  Task c statement.   Fill-In not in a task  Statement goes here with a blank.      There is no right answer ;)       "
},
{
  "id": "ex-an-exercise-with-tasks",
  "level": "2",
  "url": "sec-section-name.html#ex-an-exercise-with-tasks",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "Exercise Title.",
  "body": "Exercise Title  Exercise introduction.  Task A Title  Task a statement.  Fill-in in a Task  Statement goes here with a blank.      There is no right answer ;)     Task C Title  Task c statement.  "
},
{
  "id": "ex-fill-in-not-in-task",
  "level": "2",
  "url": "sec-section-name.html#ex-fill-in-not-in-task",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "Fill-In not in a task.",
  "body": "Fill-In not in a task  Statement goes here with a blank.      There is no right answer ;)     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
