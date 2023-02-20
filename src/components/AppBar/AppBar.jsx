import style from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';

export default function Appbar() {
	return (
		<header className={style.header}>
			<Container>
				<Navigation />
			</Container>
		</header>
	);
}