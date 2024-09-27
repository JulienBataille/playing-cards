import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-monster-confirmation-dialogue',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, MatDialogTitle, MatDialogClose, MatButtonModule],
  templateUrl: './delete-monster-confirmation-dialogue.component.html',
  styleUrl: './delete-monster-confirmation-dialogue.component.css'
})
export class DeleteMonsterConfirmationDialogueComponent {

}
