import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = 'razorlex1995@gmail.com';	
		
		var settings = {
			title: 'About',
			params: [
				{title: "MPEX", html: '<img style="width:64px;" class="about-logo" alt="" src="images/logo-colors.png" />'},
				{title: "Name: : MPEX"},
				{title: "Version: 1.0.0"},
				{title: "Description: MPEX online photo editor"},
				{title: "Author: ALEXANDER ERIC"},
				{title: "Email: razorlex1995@gmail.com"},
				{title: "GitHub: https://paymyserver.github.io/pelukis"},
				{title: "Website: https://paymyserver.github.io/pelukis"},
			],
		};
		this.POP.show(settings);
	}

}

export default Help_about_class;
