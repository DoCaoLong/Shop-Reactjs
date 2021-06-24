export default function ListCardLocation({ address, name, phone, store_hours, Clicked, active }) {
	return (
		<div className={`card-body ${active ? 'active-local' : ''}`} onClick={Clicked}>
			{/* Heading */}
			<p className="font-weight-bold">{name}</p>
			<p className={`text-gray-500 ${active ? 'color-white' : ''}`}>{address}</p>
			<p>
				<strong>Phone:</strong> <br />
				<a className={`text-gray-500 ${active ? 'color-white' : ''}`} href="tel:6-146-389-574">
					{phone}
				</a>
			</p>
			<p className="mb-0">
				<strong>Store Hours:</strong> <br />
				<span className={`text-gray-500 ${active ? 'color-white' : ''}`}>{store_hours}</span>
			</p>
		</div>
	);
}
