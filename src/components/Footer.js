import React from 'react'
// import 'bootstrap-icons'
// import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
const Footer = () => {
    return (

        <footer className="bg-dark text-center text-white">

            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-primary btn-floating m-1" href="https://www.facebook.com/danny.sequeira.961/" role="button"><i className="bi bi-facebook"></i></a>
                    <a className="btn btn-primary btn-floating m-1" href="https://twitter.com/rdani2005" role="button"><i className="bi bi-twitter"></i></a>
                    <a className="btn btn-primary btn-floating m-1" href="https://www.instagram.com/rdani2005/" role="button"><i className="bi bi-instagram"></i></a>
                    <a className="btn btn-primary btn-floating m-1" href="https://www.linkedin.com/in/rdani2005" role="button"><i className="bi bi-linkedin"></i></a>
                    <a className="btn btn-primary btn-floating m-1" href="https://github.com/rdani2005" role="button"><i className="bi bi-github"></i></a>
                </section>
            </div>
            <div className="text-center p-3" >
                © 2020 Copyright Danny Sequeira ©
            </div>
        </footer>
    )
}

export default Footer
