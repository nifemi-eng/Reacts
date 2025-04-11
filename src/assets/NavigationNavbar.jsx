// import {useState} from "react"

// const Class=()=>{
// const[name,setName]=useState("name")
// const[score,setScore]=useState("score")
// // const clickSubmit=()={}


// const Database=[
//     {course:"math", cutoff:100-199},
//     {course:"English", cutoff:200-299},
//     {course:"Civic", cutoff:300-400},
//     ]

//     const clickSubmit=()=>{
//     if(score==100-199){
//     alert("mathematics")
//     }if else{
//         al
//     }
//     }

// return(
// <div>
//     <input value={name} onChange={(e)=>setName(e.target.value)}placeholder="what is yourname"/>
//     <input value={score} onChange={(e)=>setScore(e.target.value)}placeholder="what is your score"/>
//     <button onClick={clickSubmit}>submit</button>
// </div>
// )
// }
// export default Class;




// import {useState} from 'react'

// const Admission =()=>{
//     const [name,setName] = useState ("")
//     const [score,setScore] = useState ("")
//     const clickSubmit=()=>{
//         if(score <= 99){
//    alert(`${name} you are not edigible`)
//     }else if(score === 100 && score <=199){
//         alert(`${name} you are assigned for mathematics`)
//     }else if (score=== 200 && score<=299){
//         alert(`${name} you are assigned for English`)
//     }else if(score===300 && score<=400){
//         alert(`${name} you are assigned civic`)
//     }else if(score>400){
//       alert(`${name} invalid number`)  
//     }
// }

// return(
//     <div>
//         <input value={name} onChange={(e)=>setName(e.target.value)}placeholder="what is yourname"/>
//       <input value={score} onChange={(e)=>setScore(e.target.value)}placeholder="what is your score"/>
//        <button onClick={clickSubmit}>submit</button>
//     </div>
// );
// }
// export default Admission;
// // import Navbar from "./Navbar";
// // import Footer from "./Footer";

import { useState } from "react"


// // const App =()=>{


// //   return(
// //     <>
// //     <Navbar/>
    
    
// //       <h3>Hello</h3>
// //       <Footer/>
// //     </>
// //   )
// // }

// // export default App;











// const App=()=>{
//   return(

//     <>
//     <div>HOME, ABOUT, FOOTER, SUPPORT, CONTACT</div>
//       helklo
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores unde quibusdam eum voluptatum, expedita dolor adipisci voluptate corrupti ex vitae labore doloremque voluptas quaerat velit tempore quidem, dicta ea.
//     </>
//   )
// }

// export default App







// // import Navbar from "./Navbar";
// // import Footer from "./Footer";

import { useState } from "react"


// // const App =()=>{


// //   return(
// //     <>
// //     <Navbar/>
    
    
// //       <h3>Hello</h3>
// //       <Footer/>
// //     </>
// //   )
// // }

// // export default App;











// const App=()=>{
//   return(

//     <>
//     <div>HOME, ABOUT, FOOTER, SUPPORT, CONTACT</div>
//       helklo
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores unde quibusdam eum voluptatum, expedita dolor adipisci voluptate corrupti ex vitae labore doloremque voluptas quaerat velit tempore quidem, dicta ea.
//     </>
//   )
// }

// export default App







// // import Navbar from "./Navbar";
// // import Footer from "./Footer";

import { useState } from "react"


// // const App =()=>{


// //   return(
// //     <>
// //     <Navbar/>
    
    
// //       <h3>Hello</h3>
// //       <Footer/>
// //     </>
// //   )
// // }

// // export default App;











// const App=()=>{
//   return(

//     <>
//     <div>HOME, ABOUT, FOOTER, SUPPORT, CONTACT</div>
//       helklo
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores unde quibusdam eum voluptatum, expedita dolor adipisci voluptate corrupti ex vitae labore doloremque voluptas quaerat velit tempore quidem, dicta ea.
//     </>
//   )
// }

// export default App





// // import Navbar from "./Navbar";
// // import Footer from "./Footer";

import { useState } from "react"


// // const App =()=>{


// //   return(
// //     <>
// //     <Navbar/>
    
    
// //       <h3>Hello</h3>
// //       <Footer/>
// //     </>
// //   )
// // }

// // export default App;











// const App=()=>{
//   return(

//     <>
//     <div>HOME, ABOUT, FOOTER, SUPPORT, CONTACT</div>
//       helklo
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores unde quibusdam eum voluptatum, expedita dolor adipisci voluptate corrupti ex vitae labore doloremque voluptas quaerat velit tempore quidem, dicta ea.
//     </>
//   )
// }

// export default App







const App=()=>{
  const [name,setName]=useState("tinubu")
  const [count,setCount]=useState(0)
  // setName("vicvtor")
//  
 
const handlebtn=()=>{
 if (count<20) {
  setCount(count+1)
 }
  // setName("Nicholas a play boy")
}

  return(
      <div >
        <h4>Counter :{count}</h4>
          Hello {name}
          <button onClick={handlebtn}>Click</button>
      </div>
  )

}
export default App;