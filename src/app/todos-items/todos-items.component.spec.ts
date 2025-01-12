import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosItemsComponent } from './todos-items.component';

describe('TodosItemsComponent', () => {
  let component: TodosItemsComponent;
  let fixture: ComponentFixture<TodosItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
