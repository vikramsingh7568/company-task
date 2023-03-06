import React,{useState} from 'react'
import './register.css'
const Register = () => {
    const [company,setCompany] = useState("")
    const [bill,setBill]=useState("")
    const [date,setDate]=useState("")
    const [ptype,setPtype]=useState("")
    const [pname,setPname]=useState("")
    const [pno,setPno] = useState("")
    const [batchno,setBatchno] = useState("")
    const [pqty,setPqty] = useState("")
    const [free,setFree] = useState("")
    const [rate,setRate] =useState("")
    const [disi,setDisi] = useState("")
    const [amount,setAmount] = useState("")

    const [error,setError] = useState(false)
    const [myerror , setMyerror] = useState(false)

    
    const getData = async function (){

        if(!company || !bill || !date || !ptype || !pname || !pno || !batchno || !pqty || !free || !rate || !disi || !amount){
            setError(true);
            return false;
          }else{
            setMyerror(true)
            alert("data saved successfully")
          
        let result =  await fetch('http://localhost:3001/register',{
            method : 'post',
           body: JSON.stringify({company,bill,date,ptype,pname,pno,batchno,pqty,free,rate,disi,amount}),
            headers:{
               'Content-Type':'application/json',
              
            }
        });
        result = await result.json();
        console.log(result)
    }
      }
  return (
  

    <div>Register
            <input type="text" placeholder="enter company name"    value={company}    onChange={(e)=> setCompany(e.target.value)}
             className={ !error && company || !company && error  ? "input-type" : "border-default"}></input>
            { error && !company && <span className='name'> Enter Valid company name </span>}
           
            <input type="text" placeholder="enter bill no"   value={bill}   onChange={(e)=> setBill(e.target.value)}
             className={ !error && bill || !bill && error  ? "input-type" : "border-default"}></input>
            { error && !bill && <span className='name'> Enter Valid bill no </span>}
           
            <input type="text" placeholder="enter date"value={date}onChange={(e)=> setDate(e.target.value)}
             className={ !error && date || !date && error  ? "input-type" : "border-default"}></input>
            { error && !date && <span className='name'> Enter Valid date </span>}
           
            <input type="text" placeholder="enter product type"value={ptype} onChange={(e)=> setPtype(e.target.value)}
             className={ !error && ptype || !ptype && error  ? "input-type" : "border-default"}></input>
            { error && !ptype && <span className='name'> Enter Valid Company </span>}
                      
            <input type="text" placeholder="enter product name"    value={pname}    onChange={(e)=> setPname(e.target.value)}
             className={ !error && pname|| !pname && error  ? "input-type" : "border-default"}></input>
            { error && !pname && <span className='name'> Enter Valid name </span>}
           
            <input type="text" placeholder="enter packit no"   value={pno}   onChange={(e)=> setPno(e.target.value)}
             className={ !error && pno || !pno && error  ? "input-type" : "border-default"}></input>
            { error && !pno && <span className='name'> Enter Valid setPrice </span>}
           
            <input type="text" placeholder="enter batch no"value={batchno}onChange={(e)=> setBatchno(e.target.value)}
             className={ !error && batchno || !batchno && error  ? "input-type" : "border-default"}></input>
            { error && !batchno && <span className='name'> Enter Valid Category </span>}
           
            <input type="text" placeholder="enter product quantity "value={pqty} onChange={(e)=> setPqty(e.target.value)}
             className={ !error && pqty || !pqty && error  ? "input-type" : "border-default"}></input>
            { error && !pqty && <span className='name'> Enter Valid product quantity </span>}
           
            <input type="text" placeholder="enter is product free "    value={free}    onChange={(e)=> setFree(e.target.value)}
             className={ !error && free || !free && error  ? "input-type" : "border-default"}></input>
            { error && !free && <span className='name'> Enter valid input </span>}
           
            <input type="text" placeholder="enter product rate "   value={rate}   onChange={(e)=> setRate(e.target.value)}
             className={ !error && rate || !rate && error  ? "input-type" : "border-default"}></input>
            { error && !rate && <span className='name'> Enter Valid Price </span>}
           
            <input type="text" placeholder="enter product disi  no"value={disi}onChange={(e)=> setDisi(e.target.value)}
             className={ !error && disi || !disi && error  ? "input-type" : "border-default"}></input>
            { error && !disi && <span className='name'> Enter Valid disi no </span>}
            
            <input type="text" placeholder="enter product amount "value={amount} onChange={(e)=> setAmount(e.target.value)}
             className={ !error && amount || !amount && error  ? "input-type" : "border-default"}></input>
            { error && !amount && <span className='name'> Enter Valid amount no </span>}
        <button onClick={getData}> submit</button>
    </div>
    
  )
}

export default Register