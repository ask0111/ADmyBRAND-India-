// import { useCallback, useEffect, useState } from "react";
// import '../app.css'

// export default function SelectDataType(props) {
//     const [constant, setConstant] = useState(false);
//     const [isPresent, setIsPresent] = useState(false);



//     const Handler = () => {

//     }


//     const optiondataselect = () => {
//         return (<>
//             <div>
//                 {/* <select style={{marginLeft: '10px'}} onChange={(event)=> setOption(event.target.value)}> */}
//                 <select >
//                     <option selected>select...</option>
//                     <option value='constant'>constant</option>
//                     <option value='argument'>argument</option>
//                     <option value='and'>and</option>
//                     <option value='or'>or</option>
//                 </select>
//                 <button onClick={Handler}>&#10006;</button>
//             </div>
//             {/* {constant === 'constant' ? Constant() : constant === 'argument' ? Argument() : constant === 'and' ? And() : start() } */}

//             {/* {option == 'add' ? optiondata() : ''} */}
//         </>)
//     }

//     const optionAnd = () => {
//         optiondataselect();
//     }

//     const optiondata = () => {
//         if (option === 'and') {
//             console.log('ddd', props.valueData[0])
//             return (<>
//                 <select onChange={(event) => setOption(event.target.value)}>
//                     <option>and</option>
//                 </select>

//                 {props.valueData.map((data, i) => {
//                     return (<>
//                         <div>
//                             <select onChange={(event) => setOption(event.target.value)}>
//                                 <option selected>select...</option>
//                                 <option value='constant'>constant</option>
//                                 <option value='argument'>argument</option>
//                                 <option value='and'>and</option>
//                                 <option value='or'>or</option>
//                             </select>
//                             <button onClick={Handler}>&#10006;</button>
//                         </div>
//                     </>)
//                 })}
//                 {isPresent && optiondataselect()}
//                 <button onClick={() => setIsPresent(true)}>Add More</button>
//             </>)
//         }
//         if (option === 'or') {
//             console.log('ddd', props.valueData[0])
//             return (<>
//                 {props.valueData.map((data, i) => {
//                     return (<>
//                         <div>
//                             <select onChange={(event) => setOption(event.target.value)}>
//                                 <option selected>select...</option>
//                                 <option value='constant'>constant</option>
//                                 <option value='argument'>argument</option>
//                                 <option value='and'>and</option>
//                                 <option value='or'>or</option>
//                             </select>
//                             <button onClick={Handler}>&#10006;</button>
//                         </div>
//                     </>)

//                 })}
//             </>)
//         }
//         if (option == 'select...') {

//             return (<>
//                 <select onChange={(event) => setOption(event.target.value)}>
//                     <option selected>select...</option>
//                     <option value='constant'>constant</option>
//                     <option value='argument'>argument</option>
//                     <option value='and'>and</option>
//                     <option value='or'>or</option>
//                 </select>
//                 <button onClick={Handler}>&#10006;</button>
//             </>)
//         }
//         else if (option === 'constant') {
//             return (<>
//                 <select onChange={(event) => setOption(event.target.value)}>
//                     <option selected></option>
//                     <option value={true}>true</option>
//                     <option value={false}>false</option>
//                 </select>
//                 <button onClick={Handler}>&#10006;</button>
//             </>)
//         }
//         else if (option === 'argument') {
//             return (<>
//                 <select onChange={(event) => setOption(event.target.value)}>
//                     {props.valueData.map((data, i) => {
//                         return <option value={data.bool}>{data.variable}</option>
//                     })}

//                 </select>
//                 <button onClick={Handler}>&#10006;</button>
//             </>)
//         } else {

//             return (<>
//                 <select onChange={(event) => setOption(event.target.value)}>
//                     <option selected>select...</option>
//                     <option value='constant'>constant</option>
//                     <option value='argument'>argument</option>
//                     <option value='and'>and</option>
//                     <option value='or'>or</option>
//                 </select>
//                 <button onClick={Handler}>&#10006;</button>
//             </>);
//         }
//     }


//     const Argument = () => {
//         return (<>
//             {console.log('ddll', props.valueData)}
//             {/* <select onChange={(event)=> setOption(event.target.value)}> */}
//             <select >
//                 {props.valueData.map((data, i) => {
//                     return <option value={data.bool}>{data.variable}</option>
//                 })}

//             </select>
//             <button onClick={() => setOption('html')}>&#10006;</button>
//         </>)
//     }

//     const And = () => {

//         console.log('ddpp')
//         return (<>
//             {/* <select onChange={(event)=> setOption(event.target.value)}> */}

//             <select onChange={(event) => setOption(event.target.value)}>
//                 <option value='constant'>constant</option>
//                 <option value='argument'>argument</option>
//                 <option value='and'>and</option>
//                 <option value='or'>or</option>
//                 <option selected>select...</option>
//             </select>



//             <div style={{ marginLeft: '10px' }}>
//                 {/* <select onChange={(event)=> setOption(event.target.value)}> */}
//                 <div>
//                     <select >
//                         <option selected>select...</option>
//                         <option value='constant'>constant</option>
//                         <option value='argument'>argument</option>
//                         <option value='and'>and</option>
//                         <option value='or'>or</option>
//                     </select>
//                     <button onClick={Handler}>&#10006;</button>
//                 </div>
//                 <select >
//                     <option selected>select...</option>
//                     <option value='constant'>constant</option>
//                     <option value='argument'>argument</option>
//                     <option value='and'>and</option>
//                     <option value='or'>or</option>
//                 </select>
//                 <button onClick={Handler}>&#10006;</button>
//             </div>
//             {isPresent && optiondataselect()}
//             <button style={{ marginLeft: '10px' }} onClick={() => { }}>Add More</button>
//         </>)


//     }

//     const Constant = () => {
//         return (<>
//             {/* <select onChange={(event)=> setOption(event.target.value)}> */}
//             <select >
//                 <option selected></option>
//                 <option value={true}>true</option>
//                 <option value={false}>false</option>
//             </select>
//             <button onClick={() => setOption('html')}>&#10006;</button>
//         </>);
//     }

//     const start = () => {
//         return (<>
//             <select onChange={(event) => setOption(event.target.value)}>
//                 <option value='constant'>constant</option>
//                 <option value='argument'>argument</option>
//                 <option value='and'>and</option>
//                 <option value='or'>or</option>
//                 <option selected>select...</option>
//             </select>
//             <button onClick={Handler}>&#10006;</button>
//         </>)
//     }

//     const [option, setOption] = useState('html');

//     const [chain, setChain] = useState([{
//         id: 0,
//         html: start(),
//         constant: Constant(),
//         argument: Argument(),
//         and: And()
//     }]);

//     const opationchange = useCallback(() => {
//         if (option === 'and') {
//             var ar = [...chain[0].and, And()];
//             console.log(ar, 'lk')
//             setChain([{
//                 id: 0,
//                 html: start(),
//                 constant: Constant(),
//                 argument: Argument(),
//                 and: ar
//             }]);
//         }
//     }, [option])

//     useEffect(() => {

//         // opationchange();

//         setChain([{
//             id: 0,
//             html: start(),
//             constant: Constant(),
//             argument: Argument(),
//             and: And()
//         }]);

//     }, [option])

//     return (
//         <>
//             <div style={{ margin: '20px' }}>
//                 {/* {constant === 'constant' ? Constant() : constant === 'argument' ? Argument() : constant === 'and' ? And() : start() } */}
//                 {

//                     chain[0][option]

//                 }

//             </div>
//         </>
//     );
// }