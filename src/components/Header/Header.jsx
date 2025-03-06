import React from 'react';
import style from './Header.module.css';

function Header(){

    return(
        <div>
            <header className=".p-3 text-bg-primary">
                <div className="container-fluid">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">                  
                        <ul className="nav col-12 col-lg-auto me-auto mb-2 justify-content-start mb-md-0 fw-bolder fs-3">
                            <li><a href="#" className="nav-link px-2 text-white">SportsCenter</a></li>
                        </ul>

                        <ul className="nav col-12 col-lg-auto mx-auto mb-2 justify-content-center mb-md-0 fw-semibold fs-4">
                            <li><a href="#" className="nav-link px-2 text-white fw-bold">Home</a></li>
                            <li><a href="#" className="nav-link px-2 text-white fw-bold">Store</a></li>
                            <li><a href="#" className="nav-link px-2 text-white fw-bold">Contact</a></li>
                        </ul>

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2">Login</button>
                            <button type="button" className="btn btn-warning">Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;