import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import CustomCard from '../common/CustomCard'

import './Home.css';

const Home = (props) => (
    <div className='page-container'>
        <CustomCard containerClass="new-list-container">
            <div>
                <p className='title'>Add novas listas</p>
            </div>
        </CustomCard>
        <CustomCard containerClass="list-container"
            footer={<div className="list-footer"><p>01/01/2019</p><p>1000</p></div>}>
            <div>
                <p className='title'>Mês</p>
                <div className='list-card-body'>
                    <div className='list-card-item'>
                        <FontAwesomeIcon icon={faShoppingBasket} size='sm'></FontAwesomeIcon>
                        <p>1 item(s) restante</p>
                    </div>
                    <div className='list-card-item'>
                        <FontAwesomeIcon icon={faCheck} size='sm'></FontAwesomeIcon>
                        <p>2 item(s) restante</p>
                    </div>
                </div>
            </div>
        </CustomCard>
    </div>
);

export default Home;
