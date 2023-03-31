// import { useContext, useEffect, useState } from "react";
// import { inputContext } from "../App";
// import Argument from './arguments';
// import Constant from './constant';
// import Start from './selector';


// export default function And() {

//     const [startOption, setStartOption] = useState('and');

//     // useEffect(()=>{
//     //     props.onSubmit(startOption);
//     // },[startOption])



//     const [fromStart, setFromStart] = useState(['select...']);

//     const HeadHeandler = (props) => {

//         if (props && fromStart[0] == 'and') {
//             setFromStart([...fromStart, props])
//             console.log(fromStart, 'll', 'qq')
//         }
//         else if (props) {
//             setFromStart([props])
//             console.log(fromStart, 'll', 'cc')
//         }
//         console.log(fromStart, 'll', 'pp')
//     }
//     // const HeadHeandler1 = (props)=>{
//     //     if(props == 'and'){
//     //         setFromStart([props])
//     //         setFromStart([props, 'select...', 'select...']);
//     //         console.log(fromStart, 'll', 'pp')
//     //     }


//     const valueData = useContext(inputContext);

//     return (<>

//         <select>
//             <option value='constant'>constant</option>
//             <option value='argument'>argument</option>
//             <option value='and' selector>and</option>
//             <option value='or'>or</option>
//             <option selected>select...</option>
//         </select>

//         {/* <button onClick={(event)=> setStartOption('select...')}>&#10006;</button>
                
//                 { fromStart === 'constant' ? <Constant onSubmit={HeadHeandler} /> : fromStart === 'argument' ? <Argument onSubmit={HeadHeandler} /> :  fromStart === 'and' ? <And onSubmit={HeadHeandler} /> :  <Start onSubmit={HeadHeandler}/>  }
//                 { fromStart === 'constant' ? <Constant onSubmit={HeadHeandler} /> : fromStart === 'argument' ? <Argument onSubmit={HeadHeandler} /> :  fromStart === 'and' ? <And onSubmit={HeadHeandler} /> :  <Start onSubmit={HeadHeandler}/>  } */}
//         {/*         
//                  <div style={{marginLeft: '10px'}}>

//                      <div>
//                      <select >
//                          <option selected>select...</option>
//                          <option value='constant'>constant</option>
//                          <option value='argument'>argument</option>
//                          <option value='and'>and</option>
//                          <option value='or'>or</option>
//                      </select>
//                      <button onClick={Handler}>&#10006;</button>
//                      </div>
//                      <select >
//                          <option selected>select...</option>
//                          <option value='constant'>constant</option>
//                          <option value='argument'>argument</option>
//                          <option value='and'>and</option>
//                          <option value='or'>or</option>
//                      </select>
//                      <button onClick={Handler}>&#10006;</button>
//                      </div>
//                      {isPresent && optiondataselect()}
//                      <button style={{marginLeft: '10px'}} onClick={()=>{}}>Add More</button> */}
//     </>)


// }