import { TextareaHTMLAttributes, useState } from "react";
import {Remarkable} from 'remarkable'; 
import "./index.css";


const App = () => {
  const initialState = {
    value: 'Escribe *markdown* aqui'
  }
  const [markdownState, setMarkdownState] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownState({ 
      value: e.target.value
  });
  }
  const  getRawMarkup = () => {
    const md = new Remarkable();
    return {__html: md.render(markdownState.value)};
}

  return (
    <div className="container">
      <div className="input">
        <h3>Input</h3>
        <textarea
          className="input-text"
          onChange={handleChange}
          defaultValue={markdownState.value}
        />
      </div>
      <div className="output">
        <h3>Markdown</h3>
        <div
          dangerouslySetInnerHTML={getRawMarkup()}
          className="output-text"
        ></div>
      </div>
    </div>
  );
}

export default App;
