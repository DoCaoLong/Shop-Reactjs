import { useState } from 'react';
import { useEffect } from 'react';
import localStore from '../../service/LocalStoreApi';
import ListCardLocation from './component/ListCardLocation';

export default function StoreLocation() {
	let [list, setList] = useState([]);
	useEffect(() => {
		let res = localStore.local().then((res) => setList(res.data));
		console.log(list);
	}, []);
	return (
		<>
			{/* BREADCRUMB */}
			<nav className="py-5">
				<div className="container">
					<div className="row">
						<div className="col-12">
							{/* Breadcrumb */}
							<ol className="breadcrumb mb-0 font-size-xs text-gray-400">
								<li className="breadcrumb-item">
									<a className="text-gray-400" href="index.html">
										Home
									</a>
								</li>
								<li className="breadcrumb-item">
									<a className="text-gray-400" href="contact-us.html">
										Contact Us
									</a>
								</li>
								<li className="breadcrumb-item active">Store Locator</li>
							</ol>
						</div>
					</div>
				</div>
			</nav>
			{/* HEADER */}
			<section className="pt-7 pb-12">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-md-10 col-lg-8 col-xl-6">
							{/* Heading */}
							<h3 className="mb-10 text-center">Store Locator</h3>
							{/* Search */}
							<div className="input-group input-group-merge">
								<input className="form-control" type="search" placeholder="Enter Country or City" />
								<div className="input-group-append">
									<button className="btn btn-outline-border" type="submit">
										<i className="fe fe-search" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-12 bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-5 col-lg-4">
							{/* Card */}
							<div
								className="card card-xl h-md-0 minh-md-100 mb-10 mb-md-0 shadow"
								style={{ overflow: 'auto' }}
							>
								{/*e la item trong list, i la vi tri item */}
								{list.map((e, i) => (
									<ListCardLocation {...e} key={i} />
								))}
							</div>
						</div>
						<div className="col-12 col-md-7 col-lg-8">
							{/* Map */}
							<div className="embed-responsive embed-responsive-4by3">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2816663015815!2d106.69721651480097!3d10.789725892312536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528caafa7703d%3A0xd655aeb0c7040512!2zMTEgUGhhbiBL4bq_IELDrW5oLCDEkGEgS2FvLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1624436027992!5m2!1svi!2s"></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
