import "./SiteNavItemStyle.css"

const NavContainer = ({ iconClass, link, title, description }) => {
    return (
      <div className="navcontain">
        <i className={iconClass}></i>
        <div className="text-content">
          <h2>
            <a href={link}>{title}</a>
          </h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  
  export default NavContainer;