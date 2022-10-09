import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public service: BookingService) { }

ngOnInit() {
  this.service.formModel.reset();
}

onSubmit() {
  
  this.service.register().subscribe(
    (res: any) => {
      console.log('register');
        this.service.formModel.reset();
       // this.toastr.success('New user created!', 'Registration successful.');
      
        });
      }
    

}
