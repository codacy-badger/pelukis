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
				{title: "MPEX", html: '<img style="width:64px;" class="about-logo" alt="" src="images/logo-colors.png" />'};
{title: "AUTHOR : <font>ALEXANDER ERIC</font>'};
{title: "VERSION : <font>1.0.0.0</font>'};
				{title: "DESCRIPTION: <font>MPEX photo editor</font>'};
				{title: "EMAIL: <font>razorlex1995@gmail.com</font>'};
			]
		};
