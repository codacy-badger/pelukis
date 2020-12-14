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
{name: "author",  title: "AUTHOR:"}{name:"authorname", title:"Alexander Eric"};
{name: "version", title: "VERSION:"}{name:"version", title: "1.0.0.0"};
				{name: "Email", title: "EMAIL:"}{name: "razor", title: "razorlex1995@gmail.com};
			]
		};
	};
