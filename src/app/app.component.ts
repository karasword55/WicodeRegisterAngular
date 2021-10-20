
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  public users:User[];

  constructor(private userService: UserService, private router:Router,private toastController: ToastController) {}
  yeniUser: User = new User();

  ngOnInit(){
    //this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response:User[]) =>{
        this.users=response;
      },
      (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public saveUser(){

    if(this.yeniUser.dogumYili==null || this.yeniUser.email==null || this.yeniUser.isim==null ||
       this.yeniUser.password==null || this.yeniUser.soyisim==null || this.yeniUser.tc==null){
        console.log("Boş Inputları Doldurunuz!");
        this.toastController.create({
          message:"Alanlar Boş Bırakılamaz!"
        }).then(res=>res.present());
    }else{
      this.userService.addUser(this.yeniUser).subscribe(
      
        data =>{
          
         console.log("response",data);
         //this.router.navigateByUrl('/user-list');
         this.toastController.create({
          message:"Kullanıcı Başarıyla Eklendi!!"
        }).then(res=>res.present());
         
        }
        
      )
    }
   
   
  }
}
