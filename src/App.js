import { useState, useEffect } from 'react';
import './App.css'
import compute from './compute';

function App ()
{
  
  const [player,setPlayer] = useState('')
  const [ data1, setData1 ] = useState( 
    [ {
      id: '1',
      value: ''
    }, {
      id: '2',
      value: ''
    }, {
      id: '3',
      value: ''

    } ]
  
   )
   const [data3,setData3] = useState(  [ {
    id: '1',
    value: ''
  }, {
    id: '2',
    value: ''
  }, {
    id: '3',
    value: ''

  } ])
   const [data2,setData2] = useState(  [ {
    id: '1',
    value: ''
  }, {
    id: '2',
    value: ''
  }, {
    id: '3',
    value: ''

  } 
])
const [win,setWin] = useState(false)
useEffect(()=>{
  setWin(compute([data1,data2,data3]))
},[data1,data2,data3])

   
 

  return (
    <div className="App">
      <h4>chose your inputs then chose where you wanna place it</h4>
     {win&& <h1>player {win[1].toUpperCase()} WON!!!!!</h1>}
      <div className="inputs">
        <h1 style={player==='o'?{color:'gray'}:{}} onClick={()=>{
          if(player==='')
          {
            setPlayer('x')
          }

          
          }}>X</h1>
        <h1 style={player==='x'?{color:'gray'}:{}} onClick={()=>{
          if(player===''){
          setPlayer('o')
          } 
      }}>O</h1>
      </div>
      <div className="grid">
        <div className='squere' 
            onClick={()=>{
              setData1(prev=>{
               return prev.map((item)=>{
                  if(item.id==='1'){
                    return {...item,value:player}
                  }
                  return item
                })
              })
              setPlayer('')
            }}  
        ><h1>{data1[0].value}</h1></div>
        <div className='squere'
              onClick={()=>{
                setData1(prev=>{
                 return prev.map((item)=>{
                    if(item.id==='2'){
                      return {...item,value:player}
                    }
                    return item
                  })
                })
                setPlayer('')
              }} 
        ><h1>{data1[1].value}</h1></div>
        <div className='squere'
              onClick={()=>{
                setData1(prev=>{
                 return prev.map((item)=>{
                    if(item.id==='3'){
                      return {...item,value:player}
                    }
                    return item
                  })
                })
                setPlayer('')
              }} 
        ><h1>{data1[2].value}</h1></div>
        <div className='squere'
                onClick={()=>{
                  setData2(prev=>{
                   return prev.map((item)=>{
                      if(item.id==='1'){
                        return {...item,value:player}
                      }
                      return item
                    })
                  })
                  setPlayer('')
                }} 
        ><h1>{data2[0].value}</h1></div>
        <div className='squere'
                onClick={()=>{
                  setData2(prev=>{
                   return prev.map((item)=>{
                      if(item.id==='2'){
                        return {...item,value:player}
                      }
                      return item
                    })
                  })
                  setPlayer('')
                }} 
        ><h1>{data2[1].value}</h1></div>
        <div className='squere'
                onClick={()=>{
                  setData2(prev=>{
                   return prev.map((item)=>{
                      if(item.id==='3'){
                        return {...item,value:player}
                      }
                      return item
                    })
                  })
                  setPlayer('')
                }} 
        ><h1>{data2[2].value}</h1></div>
        <div className='squere'
                onClick={()=>{
                  setData3(prev=>{
                   return prev.map((item)=>{
                      if(item.id==='1'){
                        return {...item,value:player}
                      }
                      return item
                    })
                  })
                  setPlayer('')
                }} 
        ><h1>{data3[0].value}</h1></div>
        <div className='squere'
                onClick={()=>{
                  setData3(prev=>{
                   return prev.map((item)=>{
                      if(item.id==='2'){
                        return {...item,value:player}
                      }
                      return item
                    })
                  })
                  setPlayer('')
                }} 
        ><h1>{data3[1].value}</h1></div>
        <div className='squere'
              onClick={()=>{
                setData3(prev=>{
                return  prev.map((item)=>{
                    if(item.id==='3'){
                      return {...item,value:player}
                    }
                    return item
                  })
                })
                setPlayer('')
              }} 
        ><h1>{data3[2].value}</h1></div>
      </div>
      <button onClick={()=>window.location.reload()} className='restart'>Restart</button>
    </div>
  );
            
}

export default App;
