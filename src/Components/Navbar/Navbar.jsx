import React, { useEffect, useState } from "react";
import logo from '../../assets/logo/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { MdMobileScreenShare, MdOutlineManageAccounts } from "react-icons/md";
import { GiNewBorn, GiSelfLove, GiWatch } from "react-icons/gi";
import { RiDashboardLine, RiMenuFill } from "react-icons/ri";
import { BsEmojiSunglasses } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocalLibrary } from "react-icons/md";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Avatar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Collapse
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
  ChevronDownIcon,
  HomeIcon,
  BookOpenIcon
} from "@heroicons/react/24/solid";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { CiMobile3 } from "react-icons/ci";
import { BiCollection } from "react-icons/bi";
const Navbar = () => {


  const navListMenuItems = [
    {
      title: "HOME",
      description: "Find the perfect solution for your needs.",
      icon: HomeIcon,
      path: "/"
    },
    {
      title: "MENS",
      description: "Meet and learn about our dedication",
      icon: UserGroupIcon,
      path: "/mens"
    },
    {
      title: "WATCH",
      description: "Find the perfect solution for your needs.",
      icon: GiWatch,
      path: "/watch"
    },
    {
      title: "BOOK",
      description: "Learn how we can help you achieve your goals.",
      icon: BookOpenIcon,
      path: "/book"
    },
    {
      title: "ACCESSORIES",
      description: "Reach out to us for assistance or inquiries",
      icon: BsEmojiSunglasses,
      path: "/accessories"
    },
    {
      title: "MOBILE COLLECTION",
      description: "Find the perfect solution for your needs.",
      icon: CiMobile3,
      path: "/mobileCollection"
    },
    {
      title: "NEW COLLECTION",
      description: "Read insightful articles, tips, and expert opinions.",
      icon: BiCollection,
      path: "/newCollection"
    },
    {
      title: "SPECIAL OFFERS",
      description: "Explore limited-time deals and bundles",
      icon: TagIcon,
      path: "/specialOffers"
    },
    {
      title: "BARND",
      description: "Explore limited-time deals and bundles",
      icon: MdOutlineLocalLibrary ,
      path: "/brand"
    },
    {
      title: "CONTACT",
      description: "Explore limited-time deals and bundles",
      icon: IoCallOutline,
      path: "/contact"
    },
  ];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMenuOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
      path: "/myProfile"
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
      path: "/editProfile"
    },
    {
      label: "Dashboard",
      icon: RiDashboardLine,
      path: "/dashboard"
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
      path: "/help"
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      path: "/sign-out"
    },
  ];

  return (
    <div>
      <div className="navbar bg-white border-b-4 border-gray-200">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <Link to="/"><img className='w-16' src={logo} alt="logo" /></Link>
        </div>
        <div className="navbar-end">
          <p className="text-2xl font-bold mr-2 text-black"><HiOutlineMail /></p>
          <div>
            <Menu open={isMobileMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
              <MenuHandler>
                <Button
                  variant="text"
                  color="blue-gray"
                  className="flex items-center rounded-full p-0"
                >
                  <Avatar
                    variant="circular"
                    size="md"
                    alt="profile"
                    withBorder={true}
                    color="blue-gray"
                    className=" p-0.5"
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                  />
                </Button>
              </MenuHandler>
              <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon, path }, key) => {
                  const isLastItem = key === profileMenuItems.length - 1;
                  return (
                    <NavLink to={path} key={label}>
                      <MenuItem
                        onClick={closeMenu}
                        className={`flex items-center gap-2 rounded ${isLastItem
                          ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                          : ""
                          }`}
                      >
                        {React.createElement(icon, {
                          className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                          strokeWidth: 2,
                        })}
                        <Typography
                          as="span"
                          variant="small"
                          className="font-normal"
                          color={isLastItem ? "red" : "inherit"}
                        >
                          {label}
                        </Typography>
                      </MenuItem>
                    </NavLink>
                  );
                })}
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>

      {/* Second Navbar */}
      <div className={`navbar bg-white text-black ${scrolled ? 'fixed top-0 left-0 w-full shadow-md z-10' : ''}`}>
        <div className="navbar-start">
          {/* Drawer */}
          <React.Fragment>
            <p onClick={openDrawer} className="font-bold text-4xl"><RiMenuFill /></p>
            <Drawer open={open} onClose={closeDrawer}>
              <div className="mb-2 flex items-center justify-between p-4">
                <Typography className="" variant="h5" color="blue-gray">
                  APT COMMERCE
                
                </Typography>
            
                <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </div>
              <List>
                {navListMenuItems.map(({ title, path, icon }, index) => (
                  <NavLink to={path} key={index}>
                    <ListItem>
                      <ListItemPrefix>
                        {React.createElement(icon, { className: "h-5 w-5" })}
                      </ListItemPrefix>
                      {title}
                    </ListItem>
                  </NavLink>
                ))}
              </List>
            </Drawer>
          </React.Fragment>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {navListMenuItems.map(({ title, path }) => (
              <NavLink
                to={path}
                key={title}
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? " text-[13px] font-bold  border-b-2 border-green-700" : "text-[13px] hover:text-green-700 font-bold",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                {title.toUpperCase()}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="form-control relative">
            {/* <input type="text" placeholder="Search" className="input input-bordered border-4 rounded-full border-gray-400 bg-white  focus:outline-none h-10 w-32" /> */}
            <span className="absolute  top-0 right-2 flex items-center justify-center h-full w-8 text-black text-2xl">
              <IoIosSearch />
            </span>
          </div>
          <Link className='text-3xl text-black'><HiOutlineShoppingBag /></Link>
          <Link className='text-3xl text-black'><MdOutlineManageAccounts /></Link>
          <Link className='text-3xl text-black'><GiSelfLove /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
