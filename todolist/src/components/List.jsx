import "./List.css"
import TodoItem from "./todoItem"
import { useState } from "react"

function List ({todos, onUpdate, onDelete, onUpdateContent}){

    const [search, setSearch] = useState("");

    const onChangeSearch = (e)=>{
        setSearch(e.target.value);
    };

    const getFilteredDate = ()=>{
        if(search ===""){return todos};

        return todos.filter((todo)=>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredDate().sort((a,b)=>a.isDone - b.isDone);


    return<div className="List">
        <h2>Todo List</h2>
        <input
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요"
        />
        <div className="todoWrapper">
            {filteredTodos.map((todo)=>{
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} onUpdateContent={onUpdateContent}/>
            })}
        </div>
    </div>
}

export default List