import React from "react";

function Button({handleAdd}) {

    return(
        <button onClick={handleAdd} className='block bg-white p-3 rounded w-fll '>add question</button>
    )
}
export default Button;