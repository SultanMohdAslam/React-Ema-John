import React, { useEffect, useState } from 'react';
import aslam from '../../images/aslam.jpg'
import Gymitem from '../Gymitem/Gymitem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump } from '@fortawesome/free-solid-svg-icons'
import './Gym.css'

const Gym = () => {
    const [gym, setgym] = useState();
    const [breakTime, setbreakTime] = useState();
    const [totaltime, setTotaltime] = useState();
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setgym(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart);
        setTotalTimeFun(newCart)
    }
    const setTotalTimeFun = (newCart) => {
        let sum = 0;
        newCart?.map(cart => cart.time).forEach(element => {
            sum += element;
        });
        setTotaltime(sum)
    }
    const setTime = (time) => {
        setbreakTime(time)
    }
    return (
        <div>
            <div className='header-main'>
                <div className='header'>
                    <FontAwesomeIcon icon={faGasPump}></FontAwesomeIcon>
                    <h3>ULTRA GYM FIT</h3>
                </div>
                <p>Select today’s exercise</p>
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        gym?.map(product => <Gymitem
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Gymitem>)
                    }
                </div>
                <div className="cart-container">
                    <div className='profile-div'>
                        <div>
                            <img className='profile' src={aslam} alt="" />
                        </div>
                        <div className='profile-name'>
                            <h5>Zahid Hossain</h5>
                            <p>Sydney, Australia</p>
                        </div>
                    </div>
                    <div>
                        <ul className='my-details'>
                            <li>
                                <p className='details-value'>75kg</p>
                                <p>Weight</p>
                            </li>
                            <li>
                                <p className='details-value'>6.5</p>
                                <p>Height</p>
                            </li>
                            <li>
                                <p className='details-value'>25yrs</p>
                                <p>Age</p>
                            </li>
                        </ul>
                    </div>


                    <h3>Add A Break</h3>
                    <ul className='time-set'>
                        <li onClick={() => setTime('10s')}>10s</li>
                        <li onClick={() => setTime('20s')}>20s</li>
                        <li onClick={() => setTime('30s')}>30s</li>
                        <li onClick={() => setTime('40s')}>40s</li>
                        <li onClick={() => setTime('50s')}>50s</li>
                    </ul>

                    <h3>Exercise Details</h3>
                    <div className='set-second'>
                        <p>Exercise time</p>
                        <p>{totaltime}</p>
                    </div>
                    <div className='set-second'>
                        <p>Break time</p>
                        <p>{breakTime}</p>
                    </div>
                    <button className='btn-cart2'>
                        <p>Activity Completed</p>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Gym;