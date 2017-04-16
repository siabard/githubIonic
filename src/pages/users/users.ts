import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';
import { UserDetailsPage } from '../user-details/user-details';
/**
 * Generated class for the Users page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: User[];
  originalUsers: User[];
  
  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe( users => { this.users = users; this.originalUsers = users; });
  }

  goToDetails(login: string) {
    this.navCtrl.push( UserDetailsPage, {login});
  }

  search( searchEvent ) {
    let term = searchEvent.target.value;

    if (term.trim() === '' || term.trim().length < 3) {
      this.users = this.originalUsers;
    } else {
      this.githubUsers.searchUsers( term ).subscribe(users => {
        this.users = users;
      });
    }
  }

}
