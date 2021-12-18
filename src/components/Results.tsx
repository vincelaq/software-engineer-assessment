import React from 'react'
import { IState as IProps } from '../App'

const Results: React.FC<IProps> = ({ data }) => {
    return (
        <div className='card'>
            <img 
                src={data.avatar_url} 
                className='image'
            />
            <div className='card-info'>
                <h1> {data.login} </h1>
                <p>Name: {data.name} </p>
                <p>Email: {data.email} </p>
                <p>Bio: {data.bio} </p>
            </div>
        </div>
    )
}

export default Results
