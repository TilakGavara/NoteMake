import react from 'react';

function Header({handleDark}){
    return(
        <header>
            <h1>Make Your Notes Guys.....</h1>
            <button onClick={()=> handleDark((prev)=>!prev)} className='light'>Toggle</button>
        </header>
    )
}
export default Header