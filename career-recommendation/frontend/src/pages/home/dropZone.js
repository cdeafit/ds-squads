import React from 'react';
import {useDropzone} from 'react-dropzone';

export function Dropzone(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input id="uploadFile" type="file" accept=".pdf" {...getInputProps()}/>
        <button id="dropzone">Sube aquí el PDF con los resultados de tus ICFES</button>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

<Dropzone />
