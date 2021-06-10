export class Api {
	endpoint = '';
	useToken = false;
	constructor(endpoint) {
		this.endpoint = endpoint;
	}

	token() {
		this.useToken = true;
		return this;
	}

	json(res) {
		if (res.status === 200) {
			return res.json();
		}
	}

	setupHeader() {
		let header = {
			'Content-Type': 'application/json',
		};
		if (this.useToken) {
			let token = JSON.parse(localStorage.getItem('login'))?.token?.accessToken;
			if (token) {
				header.Authorization = `Bearer ${token}`;
			}
		}
		this.useToken = false;
		return header;
	}

	get(url) {
		return fetch(this.endpoint + url, {
			method: 'GET',
		}).then();
	}
	post(url, data = {}) {
		let headers = this.setupHeader();
		let body = JSON.stringify(data);
		return fetch(this.endpoint + url, {
			method: 'POST',
			headers,
			body,
		}).then(this.json);
	}
	put(url, data = {}) {
		let headers = this.setupHeader();
		let body = JSON.stringify(data);
		return fetch(this.endpoint + url, {
			method: 'PUT',
			headers,
			body,
		}).then(this.json);
	}
	delete(url) {
		return fetch(this.endpoint + url).then();
	}
}
