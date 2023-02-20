import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';


let activeClassName = {
	color: '#2196f3',
};

const Navigation = () => (
	<nav>
		<NavLink
			to="/"
			className={style.link}
			style={({ isActive }) => (isActive ? activeClassName : undefined)}
		>
			Home
		</NavLink>
		<NavLink
			to="/movies"
			className={style.link}
			style={({ isActive }) => (isActive ? activeClassName : undefined)}
		>
			Movies
		</NavLink>
	</nav>
);

export default Navigation;