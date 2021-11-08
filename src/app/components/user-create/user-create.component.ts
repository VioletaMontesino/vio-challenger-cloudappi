import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/models/user';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup;
  title = "Crear Usuario"; 
  id: string | null;

  constructor(private fb: FormBuilder, 
    private router: Router, private _userService: UserService, private aRouter: ActivatedRoute) { 
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editUser();
  }

  addUser() {
    const USER: User = {
      name: this.userForm.get('name')?.value,
      email: this.userForm.get('email')?.value
    }

    if(this.id !== null) {
      this._userService.editUser(this.id, USER).subscribe(data => {
        this.router.navigate(['/']);
      },error => {
        console.log(error);
        this.userForm.reset();
      })
    } else {
      console.log(USER);
      this._userService.saveUser(USER).subscribe(data => {
        console.log("Usuario añadido")
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
      this.router.navigate(['/']);
    }

  
  }

  editUser() {
    console.log("Editar usuario")

    if(this.id !== null) {
      this.title = 'Editar Usuario';
      this._userService.getUser(this.id).subscribe(data => {
        console.log(data.id)
        this.userForm.setValue({
          name: data.name,
          email: data.email
        })
      })
    }
  }
}
