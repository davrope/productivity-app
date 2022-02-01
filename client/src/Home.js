import React, {useState} from 'react'
import Sidebar from './components/Sidebar';
import Header from './components/Header';



export const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }


    return (
        <div>
            <Sidebar isOpen ={isOpen} toggle={toggle} />
            <Header toggle ={toggle} />
            <Hero/>
        </div>
    )
}
