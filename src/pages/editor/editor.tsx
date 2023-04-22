import Header from "../../components/header"
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

const EditorPage = () => {
  return (
    <div className="w-screen h-screen p-2 bg-slate-900">
        <Header/>

        <Editor height="90vh" defaultLanguage="javascript" theme="vs-dark" defaultValue="// some comment in js" />
    </div>
  )
}

export default EditorPage