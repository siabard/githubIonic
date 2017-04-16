import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';
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

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe( users => [ console.log(users)]);
  }


}