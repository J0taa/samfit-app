import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(public dialogRef: MatDialogRef<SignupComponent>){

  }

submit() {
throw new Error('Method not implemented.');
}
cancelar() {
this.dialogRef.close();
}

}
