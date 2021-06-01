import { useState } from "react";

let namePattern = /^[A-Za-z\s]+$/i,
  phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
  emailPattern =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i,
  webPattern =/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/i,
  facePattern =/(?:http:\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(\d.*))?([\w\-]*)?/,
  skypePattern =/^[a-z][a-z0-9\.,\-_]{5,31}$/i;

export default function useFormValidate(initialForm, validate) {
	let [form, setForm] = useState(initialForm);
	let [error, setError] = useState({});
	function inputChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		setForm({
			...form,
			[name]: value,
		});
	}
	
	function check() {
		let checkPassword="";
		let errObj = {};
		let { rule, message } = validate;
		if(!message){
			message={}
		}

		for (let i in rule) {
			let r = rule[i];
			let m = message[i] || {};

			if (r.required && !form[i]?.trim()) {
				errObj[i] = m?.required || "Trường này không được bỏ trống";
				continue;
			}
			if (r.pattern && form[i]) {
				let { pattern } = r;
				// replace(/ +/g, " ");
				if (pattern === "name") pattern = namePattern;
				if (pattern === "email") pattern = emailPattern;
				if (pattern === "phone") pattern = phonePattern;
				if (pattern === "url") pattern = webPattern;
				if (pattern === "UrlFace") pattern = facePattern;
				if (pattern === "urlSkype") pattern = skypePattern;
				if (!pattern?.test(form[i])) {
					errObj[i] = m?.pattern || ["Trường này không đúng định dạng"];
				}
			}
			if(r.min){
				if(form[i].length < r.min){
					errObj[i] = m?.min || `Mật khẩu không được nhỏ hơn ${r.min} ký tự`;
				}
			}
			if(r.max){
				if(form[i].length > r.max){
					errObj[i] = m?.max || `Mật khẩu không được lớn hơn ${r.max} ký tự`;
				}
			}
			if(r.check){
				checkPassword = form[i];
			}
			if(r.confirm_password){
				if(checkPassword !== form[i]){
					errObj[i] = "Mật khẩu nhập lại không đúng";
				}
			}
		}

		setError(errObj);
		return errObj;
	}
	return { form, error, inputChange, check };
}
