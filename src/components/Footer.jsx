import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa';


function Footer() {
  return (
    <>
    <footer className="flex flex-col  gap-20 justify-between h-[35vh] p-10 border-t-[1px] border-sky-100">
     <div className="flex justify-between flex-wrap gap-12">
     <div className="">
        <h3 className="font-extrabold text-[16px]">Resume Matcher</h3>
        <p>GitHub Apache 2.0</p>
      </div>

      <div className="">
        <h3 className="font-extrabold text-[16px]">Community</h3>
        <p>DEV Community Post</p>
      </div>

      <div className="">
        <h3 className="font-extrabold text-[16px]">Find Us</h3>
        <ul>
          <li>Product Hunt</li>
          <li>Discord</li>
          <li>Alternative To</li>
          <li>Toolify AI</li>
        </ul>
      </div>

      <div className="git-div">
        <h3 className="font-extrabold text-[16px]">GitHub</h3>
        <ul>
          <li>Creator</li>
          <li>Contributors</li>
          <li>Star Gazers</li>
          <li>Forks</li>
        </ul>
      </div>
     </div>

     <div className="flex justify-between flex-wrap gap-6 pb-5">
      <h2> <span className="text-[#209cff]">Apache 2.0 License</span> © Resume Matcher Contributors</h2>
      <div className="flex justify-between w-[150px]">
      <FontAwesomeIcon icon={faEnvelope} className='cursor-pointer'/>
      <FaGithub className='cursor-pointer'/>
      <FaDiscord className='cursor-pointer'/>
      <FaTwitter className='cursor-pointer'/>
      </div>
     </div>
    </footer>
    </>
  )
}

export default Footer