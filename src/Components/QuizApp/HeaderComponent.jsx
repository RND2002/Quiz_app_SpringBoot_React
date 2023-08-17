import React from 'react'
import {Link} from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
    <div className="container">
        <div className="row">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.codesite.com">CodeSite</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                            {/* {isAuthenticated && <Link className="nav-link" to="/welcome">Home</Link>}</li> */}
                            <Link className="nav-link" to="/welcome">Home</Link></li>
                        <li className="nav-item fs-5">
                        {/* {isAuthenticated && <Link className="nav-link" to="/quiz">Todos</Link>}</li> */}
                        <Link className="nav-link" to="/question">Go to Quiz</Link></li>
                        <li className="nav-item fs-5">
                            {/* {isAuthenticated && <Link className="nav-link" to="/welcome">Home</Link>}</li> */}
                            <Link className="nav-link" to="/quizCRUD">Manage Quiz</Link></li>
                            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">fdhfdhgde
                                
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div> */}
                    </ul>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item fs-5">
                        {/* {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}</li> */}
                        <Link className="nav-link" to="/login">Login</Link></li>
                    <li className="nav-item fs-5">
                        {/* {isAuthenticated && <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}</li> */}
                        <Link className="nav-link" to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

  )
}

export default HeaderComponent