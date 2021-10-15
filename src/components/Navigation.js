import React from 'react'
import PropTypes from 'prop-types'
import logo from '../logo.svg';

function Navigation({ titulo, tasks }) {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="navbar-brand">
                    <img src={logo} alt="" width="60" height="30" className="d-inline-block align-text-top App-logo" alt="logo" />
                    {titulo}
                    <span className="badge rounded-pill bg-info text-dark mx-2">
                        { tasks.length }
                    </span>
                </a>
            </nav>
        </div>
    )
}

Navigation.propTypes = {
    titulo: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired
}

Navigation.defaultProps = {
    titulo: 'Task'
}

export default Navigation;