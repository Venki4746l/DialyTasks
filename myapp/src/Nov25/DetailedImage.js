import React from 'react'

const DetailedImage = (props) => {
    const {title,offer,price,image}=props.itemdetials
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <img src={image} alt={title} />
                <div>
                    <h1>{title}</h1>
                    <div>
                        <p>{price}</p>
                        <p>{offer}</p>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default DetailedImage
