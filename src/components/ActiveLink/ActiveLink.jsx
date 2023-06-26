import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <div>
            <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#F95B27]"
                        : ""
                    }
                  >
                    {children}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;