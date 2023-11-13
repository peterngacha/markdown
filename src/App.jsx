import { useState } from 'react'
import React from 'react';
import {marked} from 'marked';
import styles from './styles/app.module.css'

//  Set the marked options
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

//  Create a new marked renderer
const renderer =new marked.Renderer()

//  Override the Link renderer to add target="_blank" and rel="noopener" attributes
renderer.Link = function (href, title, text) {
    return `<a target="_blank" rel="noopener" href="s{href)">${text}</a>`;
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

const Markdown = () => {
  const [markdown, setMarkdown] = useState(placeholder)

  const handleChange = e => {
    setMarkdown(e.target.value)
  }

  return (
    <>
    
    <h1 className={styles.h1}>Markdown Editor</h1>
    <div className={styles.markdown}  >
      <textarea  className={styles.textarea} id="editor" onChange={handleChange} value={markdown} />
      <div id="preview" className={styles.preview} dangerouslySetInnerHTML={{ __html: marked(markdown, { renderer: renderer }) }} />
    </div>
    </>


)
}

export default Markdown;



