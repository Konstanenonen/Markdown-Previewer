/* eslint-disable react/no-danger */
import React from 'react';
import { marked } from 'marked';
import startingText from './startingText';

function App() {
  const [text, setText] = React.useState(startingText);

  marked.setOptions({
    renderer: new marked.Renderer(),
    langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
    pedantic: false,
    gfm: true,
    breaks: true, // this was was needed to be set true for the final test
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  });

  function getMarkdownText() {
    const rawMarkup = marked.parse(text);
    return { __html: rawMarkup };
  }

  return (
    <div className="App">
      <textarea id="editor" value={text} onChange={(event) => setText(event.target.value)} />
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
    </div>
  );
}

export default App;
