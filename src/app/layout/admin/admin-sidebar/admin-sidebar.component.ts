import { Component, OnInit } from '@angular/core';
import { Navigation } from './admin-sidebar.navigation';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
	navigationLinks: Navigation[] = [];
	constructor() { }

	ngOnInit(): void {
		this.navigationLinks = [{
			label: 'Condominiums',
			icon: 'globe',
			href: '#',
			children: [{
				label: 'List all',
				href: '/condominiums'
			}, {
				label: 'Create',
				href: '/condominiums/create-update'
			}]
		}, {
			label: 'Groups',
			icon: 'layers',
			href: '#',
			children: [{
				label: 'List all',
				href: 'index.html'
			}, {
				label: 'Create',
				href: '/condominiums'
			}]
		}, {
			label: 'Towers',
			icon: 'columns',
			href: '#',
			children: [{
				label: 'List all',
				href: 'index.html'
			}, {
				label: 'Create',
				href: '/condominiums/create-update'
			}]
		}, {
			label: 'Dashboard',
			icon: 'pie-chart',
			href: '/condominiums/create-update'
		}, {
			label: 'Chat',
			icon: 'message-circle',
			href: 'index.html'
		}, {
			label: 'Mail',
			icon: 'mail',
			href: 'index.html'
		}, {
			label: 'Todo List',
			icon: 'check-square',
			href: 'index.html'
		}, {
			label: 'File Manager',
			icon: 'file-plus',
			href: 'index.html'
		}, {
			label: 'Calendar',
			icon: 'calendar',
			href: 'index.html'
		}, {
			label: 'Gallery',
			icon: 'image',
			href: 'index.html'
		}, {
			label: 'Invoice',
			icon: 'file-text',
			href: 'index.html'
		}, {
			label: 'Forms',
			icon: 'edit-3',
			href: '#',
			children: [{
				label: 'Basic',
				href: 'index.html'
			}]
		}];
	}

}
