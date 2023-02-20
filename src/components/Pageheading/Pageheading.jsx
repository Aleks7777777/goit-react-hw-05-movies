import style from './Pageheading.module.css';

export default function PageHeading({ text }) {
	return <h1 className={style.title}>{text}</h1>;
}
