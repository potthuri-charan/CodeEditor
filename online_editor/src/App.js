import Editor from '@monaco-editor/react'
import './App.css';
import { useState,useRef } from 'react';

const files = {
  "script.py":{
    name: "script.py",
    language: "python",
    value: "Enter the code of python"
  },
  "index.html":{
    name: "index.html",
    language: "html",
    value: "<div> </div>"
  }
}
function App() {
  const [fileName,setfileName]=useState("script.py");
  const editorRef=useRef(null);
  const file = files[fileName];
  function handelEditorMount(editor,monaco){
    editorRef.current = editor;
  }
  function getEditorValue(){
    alert(editorRef.current.getValue());
  }
  return (
    <div className="App">
      <button onClick={() => setfileName("index.html")}>
        Switch to html
      </button>
      <button onClick={() => setfileName("script.py")}>
        Switch to python
      </button>
      <button onClick={() => getEditorValue()}>Submit</button>
      <Editor
      height= "100vh"
      width="100%" 
      theme='vs-dark'
      onMount={handelEditorMount}
      path={file.name}
      defaultLanguage={file.language}
      defaultValue={file.value}
      />   
    </div>
  );
}

export default App;
