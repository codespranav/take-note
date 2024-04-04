import React from 'react'

const Card = () => {
    const cardStyle = {
        width: '18rem',
        backgroundColor: "#07072D",
        color: "white"
    }
    return (
        <div>
        <div className='d-flex justify-between p-2 justify-content-evenly flex-wrap'>
            <div className="card mx-4 my-4 border border-white" style={cardStyle}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-primary view-button">View Note</a>
                </div>
            </div>
            <div className="card mx-4 my-4 border border-white" style={cardStyle}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-primary view-button">View Note</a>
                </div>
            </div>
            <div className="card mx-4 my-4 border border-white" style={cardStyle}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-primary view-button">View Note</a>
                </div>
            </div>
            <div className="card mx-4 my-4 border border-white" style={cardStyle}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-primary view-button">View Note</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card
