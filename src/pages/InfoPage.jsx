import React from 'react'
import './InfoPage.css'
export const InfoPage = (props) => {
    const {id,name,bred_for,life_span,temper,group,origin,weight,height,url} = props.location
    return (
        <div className = 'infopage'>
        
            
            <div className = 'head_container'><img className = 'photo' src = {url} alt = {name}></img>
            <div className = "head-subt" >
                <h1 className = 'head'>{name}</h1>
                <h2 className = 'subt'>{bred_for}</h2>
            </div></div>
            <div className = 'deets'>
                <h1 className = 'tit'>Lifespan<h2 >{`${life_span==null?"Unknown":life_span}`}</h2></h1>
                <h1 className = 'tit'>Temperment<h2 >{`${temper==null?"Unknown":temper}`}</h2></h1>
                <h1 className = 'tit'>Breed Group <h2>{`${group==null?"Unknown":group}`}</h2></h1>
                <h1 className = 'tit'>Origin <h2>{`${origin==null?"Unknown":origin}`}</h2></h1>
                <h1 className = 'tit'>Weight <h2>{`${weight==null?"Unknown":weight}Kg`}</h2></h1>
                <h1 className = 'tit'>Height <h2>{`${height==null?"Unknown":height}Cm`}</h2></h1>
            </div>
            
        </div>
    )
}
