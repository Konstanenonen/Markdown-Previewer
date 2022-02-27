/* eslint-disable react/no-danger */
import React from 'react';
import { marked } from 'marked';
import startingText from './startingText';

function App() {
  const [text, setText] = React.useState(startingText);

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
