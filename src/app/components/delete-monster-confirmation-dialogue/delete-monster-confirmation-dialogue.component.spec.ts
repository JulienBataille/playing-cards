import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMonsterConfirmationDialogueComponent } from './delete-monster-confirmation-dialogue.component';

describe('DeleteMonsterConfirmationDialogueComponent', () => {
  let component: DeleteMonsterConfirmationDialogueComponent;
  let fixture: ComponentFixture<DeleteMonsterConfirmationDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMonsterConfirmationDialogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMonsterConfirmationDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
