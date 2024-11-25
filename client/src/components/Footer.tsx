import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className=" bg-slate-700  ">
      <div className="text-white  py-10 px-50 grid grid-cols-1  sm:grid-cols-2    md:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-4 items-center text-center ml-10 mr-10">
          <div className="text-xl font-bold">About RouteMate</div>
          <div>Connecting travelers worldwide for unforgettable adventures</div>
          <div className="flex w-full justify-around">
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaInstagram size={30} />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center px-4">
        <div className="text-xl font-bold">Quick Links</div>
        <ul className="text-blue-500" >
          <li><a href="">Features</a></li>
          <li><a href="">Find Partner</a></li>
          <li><a href="">About Us</a></li>
        </ul>
        </div>
        <div className="flex flex-col gap-4 items-center sm:col-span-2 md:col-span-1 px-4">
        <div className="text-xl font-bold">Support</div>
        <ul className="text-blue-500" >
          <li><a href="">Help Center</a></li>
          <li><a href="">Safety Tips</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
        </div>
      </div>
      <div className="text-center py-4 px-4 text-white text-2xl">
        <p>© 2024 RouteMate. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer