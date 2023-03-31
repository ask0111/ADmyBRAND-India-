import { useEffect, useState } from 'react';
import Argument from '../arguments';
import Constant from '../constant';
import Start from '../selector';
import And from '../and'
import Or from '../or'
import { type } from '@testing-library/user-event/dist/type';

export default function Head(props) {
    const [fromStart, setFromStart] = useState(['select...']);
    const [result, setResult] = useState(['undefined']);
    const [button, setButton] = useState([]);

    // const HeadHeandler = (props, index)=>{
    //     if(props == 'and'){
    //         setFromStart(fromStart.map((data, i)=> {
    //             if(i == index){
    //                 return props;
    //             }
    //             return data;
    //         }));
    //         setFromStart([...fromStart, 'select...', 'select...']);
    //         setButton([...button, 'Add Op'])
    //     }
    //     else if(props && fromStart[0] == 'and'){
    //         setFromStart([...fromStart ,props]);
    //         console.log(fromStart, 'll', 'qq');
    //     }
    //     else if(props){
    //         setFromStart(fromStart.map((data, i)=> {
    //             if(i == index){
    //                 return props;
    //             }
    //             return data;
    //         }));
    //         console.log(fromStart, 'll', 'cc');
    //     }
    //     console.log(fromStart, 'll', 'pp');
    // }

    useEffect(() => {
        props.onChangeValues(result);
    }, [result])

    const HeadHeandler = (props, index, subindex) => {
        if (props == 'and') {
            setFromStart(fromStart.map((data, i) => {
                if (i === index) {
                    return ['and', 'select...', 'select...'];
                }
                return data;
            }));
            setResult(result.map((data, i) => {
                if (i === index) {
                    return ['&&', '', ''];
                }
                return data;
            }));
            setButton([...button, 'Add Op'])
        }
        else if (props == 'or') {
            setFromStart(fromStart.map((data, i) => {
                if (i === index) {
                    return ['or', 'select...', 'select...'];
                }
                return data;
            }));
            setResult(result.map((data, i) => {
                if (i === index) {
                    return ['||', '', ''];
                }
                return data;
            }));
            setButton([...button, 'Add Op'])
        }
        else if (props && fromStart[0] == 'and') {
            setFromStart([...fromStart, props]);
        }
        else if (props) {
            setFromStart(fromStart.map((data, i) => {
                if (typeof (data) == 'object') {
                    return data.map((subdata, submapindex) => {
                        if (i == index && subindex == submapindex) {
                            return props;
                        }
                        return subdata;
                    })
                }
                else {
                    if (i == index) {
                        return props;
                    }
                    return data;

                }
            }));
        }
    }

    const HeadHeandler2 = (a, b) => {
        setFromStart([...fromStart, a]);
        setResult([...result, ''])
    }

    const HeadHeandlerValue = (props, index, subindex) => {
        setResult(result.map((data, i) => {
            if (typeof (data) == 'object') {
                return data.map((subdata, submapindex) => {
                    if (i == index && subindex == submapindex) {
                        return (props == true || props == 'true') ? true : props == '&&' ? '&&' : props == '||' ? '||' : false;
                    }
                    return (subdata == true || subdata == 'true') ? true : subdata == '&&' ? '&&' : subdata == '||' ? '||' : false;
                })
            }
            else {
                if (i == index) {
                    return (props == true || props == 'true');
                }
                return (data == 'true' || data == 'true');

            }
        }));
    }


    return (<>
        {fromStart.map((data, i) => {

            if (typeof (data) == 'object') {

                return (
                    <div style={{ marginLeft: `${10 + i * 16}px`, display: 'flex', flexWrap: 'wrap', width: '200px' }}>
                        {
                            data.map((subdata, subindex) => subdata === 'constant' ? <Constant onSubmit={(props) => HeadHeandler(props, i, subindex)} onSubmitValue={(props) => HeadHeandlerValue(props, i, subindex)} /> : subdata === 'argument' ? <Argument onSubmit={(props) => HeadHeandler(props, i, subindex)} onSubmitValue={(props) => HeadHeandlerValue(props, i, subindex)} /> : subdata === 'and' ? <And onSubmit={(props) => HeadHeandler(props, i, subindex)} /> : subdata === 'or' ? <Or onSubmit={(props) => HeadHeandler(props, i, subindex)} /> : <Start onSubmit={(props) => HeadHeandler(props, i, subindex)} />)
                        }
                    </div>
                )
            }

            return data === 'constant' ? <Constant onSubmit={(props) => HeadHeandler(props, i)} onSubmitValue={(props) => HeadHeandlerValue(props, i)} /> : data === 'argument' ? <Argument onSubmit={(props) => HeadHeandler(props, i)} onSubmitValue={(props) => HeadHeandlerValue(props, i)} /> : data === 'and' ? <And onSubmit={(props) => HeadHeandler(props, i)} /> : data === 'or' ? <Or onSubmit={(props) => HeadHeandler(props, i)} /> : <Start onSubmit={(props) => HeadHeandler(props, i)} />
        })}


        {fromStart.length > 0 && typeof (fromStart[0]) === 'object' ? fromStart.map((data, i) => <button style={{ marginLeft: `${10 + (fromStart.length - i - 1) * 16}px`, display: 'flex', flexWrap: 'wrap', width: '80px' }} onClick={() => HeadHeandler2('select...', fromStart.length)}>Add op</button>) : ''}



        {/* { fromStart.map((data, i)=> data === 'constant' ? <Constant onSubmit={(props)=>HeadHeandler(props, i)} /> : data === 'argument' ? <Argument onSubmit={(props)=>HeadHeandler(props, i)} /> :  data === 'and' ? <And onSubmit={(props)=>HeadHeandler(props, i)} /> :  <Start onSubmit={(props)=>HeadHeandler(props, i)}/>  )} */}

        {/* { fromStart === 'constant' ? <Constant onSubmit={(props)=>HeadHeandler(props, 1, 1)} /> : fromStart === 'argument' ? <Argument onSubmit={HeadHeandler} /> :  fromStart === 'and' ? <And onSubmit={HeadHeandler} /> :  <Start onSubmit={HeadHeandler}/>  } */}
    </>)
}