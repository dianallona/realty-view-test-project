import { ReactComponent as AnnotationAlertIcon } from "../../assets/icons/annotation-alert.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as ChevronDownIcon } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as MessagesSquareIcon } from "../../assets/icons/messages-square.svg";
import profileImg from "../../assets/images/person.png";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8.5 py-1.5 shadow-sm">
      <div className="flex gap-14">
        <a
          href="/"
          className="text-xl text-gray-700 hover:font-semibold transition-all ease-in-out delay-150"
        >
          My Listing
        </a>
        <a
          href="/"
          className="text-xl text-gray-700 hover:font-semibold transition-all ease-in-out delay-150"
        >
          Company
        </a>
        <a
          href="/"
          className="text-xl text-gray-700 hover:font-semibold transition-all ease-in-out delay-150"
        >
          Profile
        </a>
      </div>
      <img src={logo} alt="logo" className="w-auto h-8 object-contain" />
      <div className="flex items-center">
        <div className="flex gap-1">
          <AnnotationAlertIcon className="m-2.5 hover:scale-110 cursor-pointer transition-all ease-in-out delay-150" />
          <MessagesSquareIcon className="m-2.5 hover:scale-110 cursor-pointer transition-all ease-in-out delay-150" />
          <BellIcon className="m-2.5 hover:scale-110 cursor-pointer transition-all ease-in-out delay-150" />
        </div>
        <div className="border-r h-9 mx-2 border-gray-50" />
        <div className="flex items-center group cursor-pointer">
          <img
            src={profileImg}
            alt="profile-img"
            className="rounded-full w-9 h-9"
          />
          <div className="mx-1.5">
            <p className="text-gray-800 text-body group-hover:font-semibold transition-all ease-in-out delay-150">
              Juanita Florencia
            </p>
            <p className="text-gray-400 text-caption group-hover:font-semibold transition-all ease-in-out delay-150">
              Member #10293
            </p>
          </div>
          <ChevronDownIcon className="m-2 w-4 h-4 group-hover:scale-110 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
