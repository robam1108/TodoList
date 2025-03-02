import "./TodoItem.css"
import { useState } from "react"

function TodoItem ({id, isDone, content, date, onUpdate, onDelete, onUpdateContent}){
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] =useState(content);
    
    // 체크박스 클릭시
    const onChangeCheckbox = ()=>{
        onUpdate(id);
    };

    // 삭제버튼 클릭 시
    const onClickDelete = ()=>{
        onDelete(id);
    };

    // 수정버튼 클릭 시 토글
    const handleEditClick = () => {
        isEditing? onSave() : setIsEditing(true);
    };

    // 입력값 변경 시
    const onChangeContent = (e)=>{
        setNewContent(e.target.value);
    };

    // 저장
    const onSave = ()=>{
        onUpdateContent(id,newContent);
        setIsEditing(false);
    };

    // Enter 키로 저장
    const onkeyDown = (e)=>{
        if(e.key ==="Enter"){
            onSave();
        }
    }

    
    return <div className="TodoItem">
        <input
            type="checkbox"
            checked={isDone}
            value={isDone}
            onChange={onChangeCheckbox}
        />
        {isEditing ? (
            <input
                className="content contentInput"
                type="text"
                value={newContent}
                onChange={onChangeContent}
                onKeyDown={onkeyDown}
                onBlur={onSave}
            />
        ):(
            <div className={`content ${isDone? "done":""}`}>{content}</div>
        )}
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button className="updateBtn" onClick={handleEditClick}>{isEditing? "💾":"✏️"}</button>
        <button onClick={onClickDelete}>🗑️</button>
    </div>
}

export default TodoItem