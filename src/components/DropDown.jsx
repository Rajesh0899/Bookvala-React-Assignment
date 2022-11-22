import React, {useState} from 'react'
import './dropdown.css'
import logo from '../dropdownlog.png'
import close from '../close.png'

const DropDown = () => {
    const colors = ['Blue', 'Orange', 'Red', 'Purple', 'Green', 'Yellow', 'Violet', 'Black', 'Gold' ]

  const [data, setData] = useState(['blue'])
  const [dropDown, setDropDown] = useState(false)
  
const deleteItem = (item) =>{
setData((prevdata)=>{
  const updateData = prevdata.filter((xitem)=> item !== xitem)
  return [...updateData]
})
}

const clearAll = () =>{
  setData([])
}
  const valueChange = (element) =>{
   setData((prevdata)=>{
   return [...prevdata, element]
   })
   setDropDown(!dropDown)
  }

  return (
    <div style={{display:'flex', width:'100vw', justifyContent:'center'}} >
        <div  style={{ width:'auto'}}>
            <div style={{display:'flex',height:'auto', width:'50vw', marginTop:'10px', border:'2px solid blue', borderRadius:'10px', padding:'5px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative'}}>
                    <div style={{display:'flex', flexWrap:'wrap', width:'auto'}}>
                    {data.map((item, index)=>(
                        <div key={index} style={{height:'25px', width:'70px', position:'relative', margin:'2.5px 5px'}}>
                                <div  style={{height:'100%', width:'100%', position:'relative', margin:'0px 5px'}}>
                                    <div style={{height:'100%', width:'100%',backgroundColor:item,opacity:'0.3', position:'absolute' ,borderRadius:'3px' }}>
                                          </div>

                                     <div style={{height:'100%', width:'100%',display:'flex', position:'absolute', justifyContent:'space-around'}}>
                                         <span style={{background:'transparent',color:item, fontWeight:'bold' }}> {item} </span>
                                         <span onClick={()=> deleteItem(item)}  style={{color:'black', cursor:'pointer', fontWeight:'bold'}}>x</span>
                                    </div>
                                </div>    
                                    
                         </div>
                        
                    ))}


                    </div>
                    <div style={{cursor:'pointer', display:'flex', gap:'10px',justifyContent:'center'}}  >
                    <img width={'20px'} height={'20px'} src={close} onClick={()=> clearAll()} />
                    <img width={'30px'} src={logo} onClick={()=> setDropDown(!dropDown)} />
                    </div>
            </div>
           { dropDown ? <div style={{border:'1px solid grey', width:'50w', margin:'5px 0px', borderRadius:'10px'}}>
            {dropDown === true ? colors.map((element) => (
                                <div className='item' style={{padding:'0px 10px', color:element,  cursor:'pointer', width:'auto', display:'block',  fontSize:'20px' }}  onClick={()=> valueChange(element)} > { element}</div>
                               )) : null}
                    </div> : null }
        </div>
    </div>
  )
}

export default DropDown