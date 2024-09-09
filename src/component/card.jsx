import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="card">
                <figure>
                    <img
                    style={{width: "25rem" , height: "15rem"}}
                        src={props.src}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card