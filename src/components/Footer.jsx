

function Footer() {
  return (
    <>
    <footer className="flex justify-between h-[35vh] p-10 border-t-[1px] border-sky-100">
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

      <div className="">
        <h3 className="font-extrabold text-[16px]">GitHub</h3>
        <ul>
          <li>Creator</li>
          <li>Contributors</li>
          <li>Star Gazers</li>
          <li>Forks</li>
        </ul>
      </div>
    </footer>
    </>
  )
}

export default Footer