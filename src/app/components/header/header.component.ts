import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from 'src/app/login-modal/login-modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dialogRef: MatDialog, private translate: TranslateService) {
    // localStorage.setItem('language', 'ua');
    const language = localStorage.getItem('language') || '{}';
    this.translate.setDefaultLang(language);
  }
  public login!: any;
  public loginText = 'Вхід';

  ngOnInit(): void {

    this.changeText()
    console.log(this.loginText);

  }

  switchLanguage(language: any) {
    this.translate.use(language.target.value);
    localStorage.setItem('language', language.target.value);
  }

  openDialog() {
    // console.log(this.login);
    this.dialogRef.open(LoginModalComponent)
    // if (!this.login) {
    // const dialogref = this.dialogRef.open(LoginModalComponent);
    // dialogref.afterClosed().subscribe(() => {
    //   this.changeText();
    // })
    // }
    // return true;
  }

  changeText() {
    const currentUser: any = JSON.parse(`${localStorage.getItem('currentUser')}`);
    console.log(currentUser);

    if (currentUser && currentUser.role === 'ADMIN') {
      this.loginText = 'admin';
      this.login = '/admin'
    } else if (currentUser && currentUser.role === 'USER') {
      this.loginText = 'cabinet';
      this.login = '/cabinet'
    }
  }

  menuOnClick() {
    document.getElementById("menu-bar")?.classList.toggle("change");
    document.getElementById("nav")?.classList.toggle("change");
    document.getElementById("menu-bg")?.classList.toggle("change-bg");
  }
}
