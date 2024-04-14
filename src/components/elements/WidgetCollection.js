import React from 'react'
import Image from '../../Image'
import '../../assets/css/widget-collections.css'
const WidgetCollection = () => {
    return (
        <div className='collections'>
            <div className='container'>
                <div className='collection-section d-flex '>
                    <div className='collection-item '>
                        <div className='collection-img-link'>
                            <img src={Image.collection_1} />
                        </div>
                        <a className='collection-title'>Country style</a>
                    </div>
                    <div className='collection-item'>
                        <div className='collection-img-link'>
                            <img src={Image.collection_2} />
                        </div>
                        <a className='collection-title'>The gold braclets</a>
                    </div>
                    <div className='collection-item'>
                        <div className='collection-img-link'>
                            <img src={Image.collection_3} />
                        </div>
                        <a className='collection-title'>rose collection</a>
                    </div>
                    <div className='collection-item'>
                        <div className='collection-img-link'>
                            <img src={Image.collection_4} />
                        </div>
                        <a className='collection-title'>bracelet collection</a>
                    </div>
                    <div className='collection-item'>
                        <div className='collection-img-link'>
                            <img src={Image.collection_5} />
                        </div>
                        <a className='collection-title'>repair parts</a>
                    </div>
                    <div className=' collection-item'>
                        <div className='collection-img-link'>
                            <img src={Image.collection_6} />
                        </div>
                        <a className='collection-title'>wheels and tires</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WidgetCollection