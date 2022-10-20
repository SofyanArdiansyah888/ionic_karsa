import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store";
import { checkLogin } from "src/app/store/selectors/user.selectors";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  isLogin: Observable<boolean>;
  constructor(private store: Store<AppState>) {}

  isAuthenticated(): boolean {
    this.isLogin = this.store.select(checkLogin);
    let result = false;
    this.isLogin.subscribe((login) => {
      result = login;
    });
    return result;
  }
}
