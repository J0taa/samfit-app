import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatButtonModule,MatToolbarModule,FormsModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required]);

  constructor(public dialog: MatDialog){

  }

  openRegistro() {
    const dialogRef = this.dialog.open(SignupComponent,{
      width: '550px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }



}
