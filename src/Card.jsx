import { mergeProps } from 'solid-js';

function Card(props) {
	const merged = mergeProps({ year: 2024 }, props);
	return (
		<div class="card">
			<div><span>NOM de l'enfant:</span><span>DUONG</span></div>
			<div><span>Class:</span><span>PS1</span></div>
			<div><span>Date:</span><span>&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/{merged.year}</span></div>
			<div><span>Cantine:</span><span>OUI</span></div>
			<div><span>Garderie du soir:</span><span>NON</span></div>
		</div>
	);
}

export default Card;