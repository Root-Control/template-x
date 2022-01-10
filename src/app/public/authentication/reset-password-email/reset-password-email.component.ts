import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-reset-password-email',
	templateUrl: './reset-password-email.component.html',
	styleUrls: ['./reset-password-email.component.css']
})
export class ResetPasswordEmailComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		document.getElementById('main')?.classList.add("form-membership");
	}
}
