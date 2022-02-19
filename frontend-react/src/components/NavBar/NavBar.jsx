import React,{useState} from 'react'
import './navbar.scss'
import { HiMenu,HiX } from "react-icons/hi";
import {images} from '../../constants/index'
import { motion } from "framer-motion"
const NavBar = () => {

    const[toggle,setToggle] = useState(false);
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }
  return (
    <nav className='app__navbar'>
        <div className="app__navbar-logo">
            <img src={images.logo} alt="navlogo" />
        </div>
        <ul className="app__navbar-links">
            {['Home','About','Work','Skills','Contact'].map(item=>(
                <li key={`link-${item}`} className="app__flex p-text">
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
        <div className="app__navbar-menu" >
                <HiMenu onClick={()=>setToggle(true)}/>
                {toggle && (
                        <motion.div
                        whileInView={{x:[300,0]}}
                        transition={{duration:0.85,ease:'easeOut'}}>
                            <HiX onClick={()=>setToggle(false)}/>
                            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
                        </motion.div>
                )}
        </div>

    </nav>
  )
}

export default NavBar