// We use useState hook to set the variable 'display' and the function to set it, setDisplay
// This allows us to toggle and update the dropdown display each time the dropdown element is clicked
import { useMemo, useState } from "react";
// import { DropDownList } from "@progress/kendo-react-dropdowns";
import jsonData from './startlistentries.json'; 
 
  
const DropDownList = ( props ) => {  
  const [ display, setDisplay ] = useState( 'none' )

  // when handleClick gets called, we use the setDisplay from our useState hook to toggle the display variable to either 'none' or 'block'
  function handleClick() {
    if (display == 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
    }
  return (
    <div>
      {/* wrapped Hello World within a div with an onClick attribute and set it to the handleClick function */}
      <div>
        Hello World
      </div>
      <div style={{display:display}}>
      {props.children}
    </div>
  </div>
  )
  }
export {DropDownList}
  // Store currently selected category  
//   const [category, setCategory] = useState("");  
  
//   // Memoized results. Will re-evaluate any time selected  
//   // category changes  
//   const filteredData = useMemo(() => {  
//     if (!category || category === "all") return startlistentries;  
  
//     return startlistentries.filter(item => item.type === category);  
// }, [category]);  
  

//   return (
//     <div>
//       Hello World
      
//       {/* { props.children } */}
//       {/* <section>
//         <form>
//           <label>Category</label>
//           <DropDownList startlistentries={categories} onChange={e => setCategory(e.value)} />
//         </form>

//         <section >
//           <ul>
//             {filteredData.map(item => {
//               return (
//                 <li key={item.id} >
//                   {item.label}
//                 </li>
//               );
//             })}
//           </ul>
//         </section>
//       </section> */}
//     </div>
//   );
// };

// export { DropDownList }