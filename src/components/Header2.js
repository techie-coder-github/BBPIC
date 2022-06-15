import { Link } from "react-router-dom";
function Header2(){
    return (
        <div className="Header2">
            <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <Link to='/home'>
            <a class="nav-link active" aria-current="page" >Home</a>
            </Link>
            </li>
            <li class="nav-item">
            <Link to='/contactus'>
            <a class="nav-link">Contact Us</a>
            </Link>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Link1</a></li>
                <li><a class="dropdown-item" href="#">Link2</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Link3</a></li>
            </ul>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
            </li>
        </ul>
      
    </div>
  </div>
</nav>
        
        </div>
      
    )
}
export default Header2;