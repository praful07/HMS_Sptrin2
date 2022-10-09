import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  readonly BaseURI = 'https://localhost:7282/api';

  formModel = this.fb.group({
    CustomerFirstName: ['', Validators.required],
    CustomerLastName: ['', Validators.required],
    NoOfPeoples: ['', Validators.required],
    FromDate: ['', Validators.required],
    ToDate: ['', Validators.required],
    EmailId: ['', Validators.required],
    PhoneNo: ['', Validators.required],
  });

  register() {
    //console.log(new Date(this.formModel.value.FromDate.toString()));
    var body = {
      customerFirstName: this.formModel.value.CustomerFirstName.toString(),
      customerLastName: this.formModel.value.CustomerLastName.toString(),
      noOfPeople: parseInt(this.formModel.value.NoOfPeoples.toString()),
      fromDate: new Date(this.formModel.value.FromDate.toString()),
      toDate: new Date(this.formModel.value.ToDate.toString()),
      emailId: this.formModel.value.EmailId.toString(),
      bookingDate: new Date(),
      phoneNumber: this.formModel.value.PhoneNo.toString(),
    };
    console.log(body);
    return this.http.post(this.BaseURI + '/BookingDetails', body);
  }
}
