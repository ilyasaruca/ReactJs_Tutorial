import React from 'react'
import NavMenu from '../components/NavMenu';

function Home() {

    const links = [
        { title: 'Buzdolabı', pid: 1001 },
        { title: 'Televizyon', pid: 1002 },
        { title: 'Tablet', pid: 1003 },
        { title: 'Bilgisayar', pid: 1004 },
        { title: 'Telefon', pid: 1005 }

    ]

    return (
        <React.Fragment>
            <NavMenu></NavMenu>
            <h1>Welcome Home</h1>
            { links.map((item, index) => {
                return (
                   <div key={index}>
                    <a href={`/detail/`+item.pid}>{item.title}</a>
                    <br></br>
                   </div>
                )
            })}
        </React.Fragment>
    )
}

export default Home;