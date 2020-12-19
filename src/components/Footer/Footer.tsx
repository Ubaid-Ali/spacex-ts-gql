import React from 'react'
import './style.css'

const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">(SpaceX) is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
                            <a href="http://spacex-ts-gql.surge.sh/">spacex-ts-gql</a>.
                        </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="https://www.facebook.com/">f<i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="https://twitter.com/">t<i className="fa fa-twitter"></i></a></li>
                                <li><a className="dribbble" href="https://dribbble.com/">d<i className="fa fa-dribbble"></i></a></li>
                                <li><a className="linkedin" href="https://en.wikipedia.org/wiki/SpaceX">l<i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;