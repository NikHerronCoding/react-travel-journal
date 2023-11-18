import React from "react"

import Card from "./Card"
import travelData from '../data/data'

export default function Body() {
    let places = travelData.map((place, index)=><Card 
        key = {index}
        itemId = {index}
        item = {place} 
    />)
    return (
        <div className="body">
            {places}
        </div>
    )
}