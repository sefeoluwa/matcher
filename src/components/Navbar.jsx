import { useState } from "react";
import { Link } from 'react-router-dom';
import { logo, menu, close } from "../assets";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { sideVariants, itemVariants } from '../utils/motion'
import { navLinks } from '../constants'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controls = useAnimation();

  const handleHover = () => {
    controls.start({ x: [0, -5, 5, -5, 0], transition: { duration: 0.7 } });
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const [active, setActive] = useState(false);

  const[toggle, setToggle] = useState(false)


  return (
    <>
       {/* Desktop Navbar */}
       <nav className="nav-full sticky top-0 flex md:flex justify-between pt-5 z-10 h-5">
        <div className="nav-container flex justify-between w-[90vw] mx-auto">
        <Link 
        to="/" 
        className="logo mt-[28px] flex justify-center items-center" 
        onClick={() => {
            setActive("");
            window.scrollTo(0,0)
          }
        }>
        <img src={logo} alt="" className="  w-full h-14 object-contain" /> 
        <p className="text-[#02D8E8] font-bold">RESUME MATCHER</p>
        </Link>  
                     <ul className="list-none hidden sm:flex flex-row gap-12 mt-4">
              {navLinks.map((Link) => ( 
            <li
            key={Link.id}
            className={`${
              active === Link.title ? "text-white" : "text-secondary"
            }hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
          </ul>
          <motion.button
            onHoverStart={handleHover}
            onHoverEnd={() => controls.start({ x: 0 })}
            animate={controls}
            className="hidden sm:block bg-[#8A2BE2] w-[135px] h-[46px] rounded-[36px]"
          >
            Sign In
          </motion.button>
        </div>
      </nav>


      {/* Mobile Navbar */}
      
    
      <nav className="md:hidden flex justify-center fixed z-10 w-[90vw] h-[15vh]">
        <div className="nav-container pt-9 flex justify-between w-[90%]">
        <Link 
        to="/" 
        className="flex items-center mb-16 gap-2" 
        onClick={() => {
            setActive("");
            window.scrollTo(0,0)
          }
        }>
        <img src={logo} alt="" className="w-[35vw] h-20  object-contain" /> 
        <p className="text-[#02D8E8] w-1 font-bold">RESUME MATCHER</p>
        </Link>  

            {/* Mobile menu button (hamburger) */}
            <div
              onClick={handleMobileMenuToggle}
            
            >
             {isMobileMenuOpen ? (
                <img src={close} alt="Close"  className="cursor-pointer"/>
              ) : (
                  <img src={menu} alt="Menu"  className="cursor-pointer "/>
                
              )}
            </div>
          </div>
      </nav>

     

      {/* Mobile Menu */}
      <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.aside
      initial={{ width: 0 }}
      animate={{
        width: 500
      }}
      exit={{
        width: 0,
        transition: { delay: 0.3, duration: 0.3 }
      }}
    >
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
        className="mobile-menu md:hidden flex flex-col fixed bg-secondary text-white h-[250px] z-10 rounded-2xl mr-8 items-center"
        style={{
          width: "250px",
          top: "13vh",
          right: "0",
        }}
      >
      <ul className='list-none flex justify-end mb-4 items-start flex-1 flex-col gap-6'>
              {navLinks.map((nav) => (
                <motion.li
                  variants={itemVariants}
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-slate-300"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </motion.li>
              ))}
            </ul>
          <motion.button
            variants={itemVariants}
            className="nav-btn bg-primary sm:block w-[135px] h-[46px] rounded-[36px] mb-[40px]"
          >
            Sign In
          </motion.button>
      </motion.div>
    </motion.aside>
  )}
</AnimatePresence>

    </>
  );
}

export default Navbar;