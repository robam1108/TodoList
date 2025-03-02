import "./Header.css"

function Header (){
    const formattedDate = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      }).format(new Date());

    return <div className="Header">
        <h2>오늘은📆</h2>
        <h1>{formattedDate}</h1>
    </div>
}

export default Header