import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const router = useRouter();
    return (
        <header className="short-header">
            <div className="gradient-block"></div>
            <div className="row header-content">
                <div className="logo">
                    <Link href="/">Author</Link>
                </div>
                <nav id="main-nav-wrap">
                    <ul className="main-navigation sf-menu">
                        <li className={router.pathname === "/" ? "current" : ""}>
                            <Link href="/" title="">Home</Link>
                        </li>
                        <li className={`has-children ${router.pathname.startsWith("/category") ? "current" : ""}`}>
                            <Link href="/category" title="">Categories</Link>
                            <ul className="sub-menu">
                                <li><Link href="/category">Wordpress</Link></li>
                                <li><Link href="/category">HTML</Link></li>
                                <li><Link href="/category">Photography</Link></li>
                                <li><Link href="/category">UI</Link></li>
                                <li><Link href="/category">Mockups</Link></li>
                                <li><Link href="/category">Branding</Link></li>
                            </ul>
                        </li>
                        <li className={`has-children ${router.pathname.startsWith("/single") ? "current" : ""}`}>
                            <Link href="/single-standard" title="">Blog</Link>
                            <ul className="sub-menu">
                                <li><Link href="/single-video">Video Post</Link></li>
                                <li><Link href="/single-audio">Audio Post</Link></li>
                                <li><Link href="/single-gallery">Gallery Post</Link></li>
                                <li><Link href="/single-standard">Standard Post</Link></li>
                            </ul>
                        </li>
                        <li className={router.pathname === "/style-guide" ? "current" : ""}>
                            <Link href="/style-guide" title="">Styles</Link>
                        </li>
                        <li className={router.pathname === "/about" ? "current" : ""}>
                            <Link href="/about" title="">About</Link>
                        </li>
                        <li className={router.pathname === "/contact" ? "current" : ""}>
                            <Link href="/contact" title="">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="search-wrap">
                    <form role="search" method="get" className="search-form" action="#">
                        <label>
                            <span className="hide-content">Search for:</span>
                            <input type="search" className="search-field" placeholder="Type Your Keywords" name="s" title="Search for:" autoComplete="off" />
                        </label>
                        <input type="submit" className="search-submit" value="Search" />
                    </form>
                    <a href="#" className="close-btn">Close</a>
                </div>
                <div className="triggers">
                    <a className="search-trigger" href="#"><i className="fa fa-search"></i></a>
                    <a className="menu-toggle" href="#"><span>Menu</span></a>
                </div>
            </div>
        </header>
    );
};

export default Header;