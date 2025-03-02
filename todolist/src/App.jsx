import './App.css'
import { useState,useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [
  {
    id:0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id:1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id:2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
]

function App() {

  const [todos,setTodos] = useState(mockData);
  const idRef = useRef(3)

  const onCreate = (content)=>{
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }
    setTodos([newTodo,...todos])
  }

  const onUpdate = (targetId)=>{
    // 특정 id를 가진 todo를 찾아 isDone을 반대로 바꾸기
    setTodos(todos.map((todo)=> todo.id === targetId? {...todo,isDone: !todo.isDone}:todo
    ))
  }

  const onDelete = (targetId)=>{
    setTodos(todos.filter((todo)=> todo.id !== targetId))
  }

  const onUpdateContent = (targetId,newContent)=>{
    setTodos(todos.map((todo)=>todo.id === targetId?
      {...todo, content:newContent}: todo
    ));
  };

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} onUpdateContent={onUpdateContent}/>
    </div>
  )
}

export default App
