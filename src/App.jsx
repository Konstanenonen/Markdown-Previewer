/* eslint-disable react/no-danger */
import React from 'react';
import { marked } from 'marked';

function App() {
  const [text, setText] = React.useState('');

  function getMarkdownText() {
    const rawMarkup = marked.parse(text);
    return { __html: rawMarkup };
  }

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <textarea id="editor" value={text} onChange={(event) => setText(event.target.value)} />
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
    </div>
  );
}

export default App;
