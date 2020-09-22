
import React, { useEffect, useState } from 'react'
import NavMenu from '../components/NavMenu'

function Dashboard() {
  //creeate Ref
  const txtRef = React.createRef()


  const [name, setName] = useState("")
  const [number, setNumber] = useState(0)
  const [search, setSeacrh] = useState("")

  function fncSend(number) {
    console.log('name', (name + ' ' + number))
    setName("")
    txtRef.current.focus()
  }

  const sum = (num1, num2) => {
    const sm = num1 + num2;
    console.log('sm', sm);
    setNumber(sm)
  }

  //document ready e eşdeğerdir. return de sayfa içeriği yüklendikten sonra tetiklenip çalışan kod bloğu
  useEffect(() => {
    sum(40, 50)
  }, [])

  const data = [
    { name: "İlyas", surname: "Aruca" },
    { name: "Samet", surname: "Aruca" },
    { name: "Alper", surname: "Aruca" },
    { name: "Salih", surname: "Aruca" },
    { name: "Şerife", surname: "Aruca" },
  ]

  const fncPrint = () => {
    console.log('fncPrint call')
  }

  return (
    <React.Fragment>
      <NavMenu btnClick={fncPrint} setName={setSeacrh} />
      <br></br>
      <input ref={txtRef} value={name} className="form-control" onChange={(evt) => setName(evt.target.value)} type="text" /><br></br>
      <input className="btn btn-success" onClick={() => fncSend(19)} type="button" value="Send" />
      <h3> {name} </h3>
      <h3> {search} </h3>
      <h3> Sum : {number} </h3>

      {data.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.name} - {item.surname}</div>
          </div>
        )
      })}

    </React.Fragment>
  );
}

export default Dashboard;
