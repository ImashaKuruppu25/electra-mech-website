import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { access, info } from '../actions/authActions';

const Navbar = () => {
  let timeout;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = async () => {
    const isLocalLogin = localStorage.getItem('isLogin');
    if (isLocalLogin && isLoggedIn) {
      await dispatch(access(navigate));
    }
    timeout = setTimeout(fetchData, 1 * 60 * 1000);
  };

  const fetchData2 = async () => {
    if (token && !user) {
      dispatch(info(token, navigate));
    }
  };

  useEffect(() => {
    fetchData();
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    fetchData2();
  }, [token, user, dispatch]);

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentUrl = window.location.pathname;
  const host = window.location.host;
  const protocol = window.location.protocol;
  const baseUrl = protocol + '//' + host;

  const navigateToTheSettings = (id) => {
    window.open(baseUrl + '/' + id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a href="/">
          <div
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">
              ElectraMech
            </p>
          </div>
        </a>
        {currentUrl === '/' && (
          <>
            <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((nav) => (
                <>
                  {nav.id != 'settings' ? (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? 'text-white' : 'text-secondary'
                      }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ) : (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? 'text-white' : 'text-secondary'
                      }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <div
                        onClick={() => {
                          navigateToTheSettings(nav.id);
                        }}
                      >
                        {nav.title}
                      </div>
                    </li>
                  )}
                </>
              ))}
            </ul>
          </>
        )}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {currentUrl === '/' && (
              <>
                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                  {navLinks.map((nav) => (
                    <>
                      {nav.id != 'settings' ? (
                        <li
                          key={nav.id}
                          className={`font-poppins font-medium cursor-pointer text-[16px] ${
                            active === nav.title
                              ? 'text-white'
                              : 'text-secondary'
                          }`}
                          onClick={() => {
                            setToggle(!toggle);
                            setActive(nav.title);
                          }}
                        >
                          <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                      ) : (
                        <li
                          key={nav.id}
                          className={`font-poppins font-medium cursor-pointer text-[16px] ${
                            active === nav.title
                              ? 'text-white'
                              : 'text-secondary'
                          }`}
                          onClick={() => {
                            setToggle(!toggle);
                            setActive(nav.title);
                          }}
                        >
                          <div
                            onClick={() => {
                              navigateToTheSettings(nav.id);
                            }}
                          >
                            {nav.title}
                          </div>
                        </li>
                      )}
                    </>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
