import { TestBed, inject } from '@angular/core/testing';

import { DisplayComponent } from './display.component';

describe('a display component', () => {
	let component: DisplayComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DisplayComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DisplayComponent], (DisplayComponent) => {
		component = DisplayComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});