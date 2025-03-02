import { useState,useRef } from "react"
import "./Editor.css"

function Editor ({onCreate}){

    const [content, setContent] = useState("");
    const contentRef = useRef();
    
    const onChangeContent = (e)=>{
        setContent(e.target.value);
    };
    
    const onSubmit = ()=>{
        if(content==""){
            contentRef.current.focus();
            return
        }
        onCreate(content);
        setContent("");
    };

    const onkeydown = (e)=>{
        if(e.keyCode ===13){
            onSubmit();
        }
    };
    
    return<div className="Editor">
        <input
            ref={contentRef}
            value={content}
            onChange={onChangeContent}
            placeholder="새로운 Todo..."
            onKeyDown={onkeydown}
        />
        <button onClick={onSubmit}>추가</button>
    </div>
}

export default Editor