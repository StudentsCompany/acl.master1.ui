import { Component, OnInit, ViewChild } from '@angular/core';
import { UIService } from '../service/ui-service';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs';
import { AclUserDTO, AclUserRole } from '../model/acl.user.model.dto';
import { AclUserService } from '../service/acl-user/acl.user.service';
import { Store } from '@ngrx/store';
import { login, register } from '../store/action/acl.user.action';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  mode : String = "register";
  hidePassword : boolean = true;
  hideConfirmPassword : boolean = true;
  printPasswordErrorMessage : boolean = false;
  isLoggedIn !: boolean;
  @ViewChild('myForm') myForm !: NgForm;

  constructor(
    private uiService : UIService,
    private aclUserService : AclUserService,
    private readonly store : Store){
  }

  ngOnInit(): void {
    this.uiService.auth_mode.subscribe((res) =>{
      this.mode = res;
      console.log('Mode is '+this.mode)
      tap(() => {
          // hidePassword in register mode is used for the login mode
          // It can be be modified, so we have to change it.
          if(this.mode === "login")
            this.hidePassword = true;
        }
      )
    })

    /* this.uiService.loggedIn.pipe(
      map((res) => {
         this.isLoggedIn = res;
      })
    ).subscribe() */

  }

  onAuthMe(newMode : String){
    this.uiService.dipacheAuthMode(newMode);
  }

  onPasswordKeyUp(){
    this.printPasswordErrorMessage = false;
  }

  onSubmit(){
    console.log(this.myForm);
    console.log(this.myForm.form.value)

    let user = new AclUserDTO();

    if(this.mode === "register"){
      let username = this.myForm.form.value.username.trim();
      let email = this.myForm.form.value.registrationEmail.trim();
      let password = this.myForm.form.value.registrationPassword.trim();
      let confirmPassword = this.myForm.form.value.confirmPassword.trim();

      if(password !== confirmPassword)
        this.printPasswordErrorMessage = true
      else{
        user.username = username;
        user.email = email;
        user.password = password;
        user.registrationDate = new Date();
        user.roles.push(AclUserRole.USER);

        console.log("What i am going to register")
        console.log(user)

        this.store.dispatch(register({aclUserDTO : user}));
        console.log("I dispatch")
        // For Romain
        // You do an http request to check if the email is unique
        // then you store the datas (stored with NgRx) => create an action
        // then you get a token for the user. (stored with NgRx)
      }

    }else{
      user.username = this.myForm.form.value.loginUsername.trim();
      user.password = this.myForm.form.value.loginPassword.trim();

      this.store.dispatch(login({aclUserDTO : user}));

      //     this.uiService.navigateTo("../games", this.route)

     /*  setTimeout(function(){
          console.log("waited for: " + i + " seconds");
          repeat();
        }, 1000);

      if(this.uiService.token != undefined)
 */

    }
  }

}
