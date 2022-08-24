import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm;
  defaultSubscription = "Advanced";
  submitted = false;
  user = {
    email: "",
    subscription: "",
    password: "",
  };

  onSubmit() {
    this.submitted = true;
    console.log("form value:");
    console.log(this.signupForm.value.userData);
    this.user.email = this.signupForm.value.userData.email;
    this.user.subscription = this.signupForm.value.userData.subscription;
    this.user.password = this.signupForm.value.userData.password;
    // console.log(this.user.email);
    // console.log(this.user.subscription);
    // console.log(this.user.password);

    this.signupForm.reset();
  }
}
