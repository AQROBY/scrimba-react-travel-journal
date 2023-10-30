import React from "react"
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data"

function App(){
    const dataCards = data.map(item => {
        return <Card {...item} />
    })
    return(
        <div>
            <Nav />
            {dataCards}
        </div>
    )
}

export default App