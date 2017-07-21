import React from 'react';
import {Link} from 'react-router'
import FaHome from 'react-icons/lib/fa/home'

const MainMenu = () => {

    return (
        <nav>
            <Link to="/"><FaHome/>GiveAway</Link>
            <Link to="about"
            	  activeStyle={{
            	  backgroundColor: "#ddd",
            	  color: "white"
            	}}>
            	About
            </Link>
            <Link to="donatenow"
            	  activeStyle={{
            	  backgroundColor: "#ddd",
            	  color: "white"
            	}}>
            	Donate Now
            </Link>
            <Link to="item"
            	  activeStyle={{
            	  	backgroundColor: "#ddd",
            	  	color: "white"
            	  }}>
            	 Home Items
           	</Link>
            <Link to="electronics"
            	  activeStyle={{
            	  	backgroundColor: "#ddd",
            	  	color: "white"
            	  }}>
            	 Electronics
           	</Link>
          <div>
            <Link to="signin"activeStyle={{backgroundColor: "white",
            	  	color: "white"
            	  }}><button>
            	 Sign In</button>
           	</Link>
            <Link to="signup"activeStyle={{backgroundColor: "white",
            	  	color: "blue"
            	  }}><button>
            	 Sign Up</button>
           	</Link>

          </div>
        </nav>
    )

  // return (
  //   <nav>
  //     <Link to="/"><FaHome/>Give Away</Link>
  //     <Link to="about" activeStyle={{
  //       backgroundColor: "white",
  //       color: "blue"
  //     }}>
  //       About
  //     </Link>
  //     <Link to="donatenow" activeStyle={{
  //       backgroundColor: "white",
  //       color: "blue"
  //     }}>
  //       Donate Now
  //     </Link>
  //     <Link to="item" activeStyle={{
  //       backgroundColor: "white",
  //       color: "blue"
  //     }}>
  //       Items
  //     </Link>
  //     <Link to="loginPage" activeStyle={{
  //       backgroundColor: "white",
  //       color: "blue"
  //     }}>
  //       Login
  //     </Link>
  //   </nav>
  // )

}

export default MainMenu
