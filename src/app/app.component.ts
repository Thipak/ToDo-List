import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public items: any[] = [];
	public newTask: any;
	public completed: any[] = [];

	public allComponent = true;
	public activeComponent = false;
	public completedComponent = false;

	constructor() { 
		const comp = localStorage.getItem("completed");
		const item = localStorage.getItem("items");
		console.log(comp);
		if(comp == null ){
		}
		else {
			this.completed = JSON.parse(comp);
		}
		if (item == null ) {
		}
		else {
			this.items = JSON.parse(item);
		}
	}

	public addTask() {
		if (this.newTask == '') {
		}
		else {
			this.items.push(this.newTask);
			this.newTask = '';
		}
		localStorage.setItem("items",JSON.stringify(this.items));

	}

	public completeTask(index: any) {
		let x = this.items[index];
		this.items.splice(index,1);
		this.completed.push(x);
		localStorage.setItem("items",JSON.stringify(this.items));
		localStorage.setItem("completed",JSON.stringify(this.completed));
	}

	public deleteTask(index: any) {
		this.completed.splice(index, 1);
		localStorage.setItem("completed",JSON.stringify(this.completed));
	}

	public deleteAll() {
		this.completed = [];
		localStorage.setItem("completed",JSON.stringify(this.completed));
	}

	
	public loadAll() {
		this.allComponent = true;
		this.activeComponent = false;
		this.completedComponent = false;
	}
	public loadActive() {
		this.allComponent = false;
		this.activeComponent = true;
		this.completedComponent = false;
	}
	public loadCompleted() {
		this.allComponent = false;
		this.activeComponent = false;
		this.completedComponent = true;
	}
}


