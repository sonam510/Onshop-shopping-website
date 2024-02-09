import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
// import { useAuth0 } from "@auth0/auth0-react";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
function Header() {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <div className="header_inner">
        <Link to="/">
          <img className="header_logo" src="logoonshop.png" alt=""></img>
        </Link>

        <div className="header_search">
          <input
            className="header_searchInput"
            placeholder="Search..."
            type="text"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="header_searchIcon"
            onClick={() => history.push("/addproduct")}
          ></FontAwesomeIcon>
        </div>

        <div className="header_nav">
          <div
            className="header_option"
            onClick={(e) => history.push("/signUp")}
          >
            <span className="header_optionLineOne">
              Hello <FontAwesomeIcon icon={faHandPointRight}></FontAwesomeIcon>{" "}
            </span>
            <span className="header_optionLineTwo">Guest</span>
            {/* const {username} = useSelector(state=> state.yourReducerName) */}
          </div>

          <div className="header_right">
            <div
              className="header_option header_returns"
              onClick={(e) => history.push("/orders")}
            >
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>

            <Link to="/checkout">
              <div className="header_optionBasket">
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                <span
                  className="header_optionLineTwo
         header_basketCount"
                >
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="Mobile_searchbar">
        <input
          className="header_searchInput"
          placeholder="Search..."
          type="text"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="header_searchIcon"
          onClick={() => history.push("/addproduct")}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Header;
