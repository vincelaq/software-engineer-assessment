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
                <p><strong>Name: </strong>{data.name} </p>
                <p><strong>Email: </strong>{data.email} </p>
                <p><strong>Bio: </strong>{data.bio} </p>
            </div>
        </div>
    )
}

export default Results
