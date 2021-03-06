import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../model/customermodel';
import { CustomerService } from '../services/customer-service.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  customerList: ICustomer[];
  feedbackList: {};
  topicId: number;
  cus: ICustomer;

  // tslint:disable-next-line: variable-name
  constructor(private _topicService: CustomerService) { }

  ngOnInit() {
    this._topicService.getProperties().subscribe(
      (customers: ICustomer[]) => {
        this.customerList = customers;
      }
    );
    this.getCustomerList();
  }

  getCustomerList() {
    // console.log("hdsvg");
    console.log(this.customerList);
    // for (const c of this.customerList) {
    //   this.feedbackList = c.topicFeedbacks;
    // }
  }

  updateCustomer() {
    console.log('In Func');
    for (const i of this.customerList) {
      if (i.topicID === this.topicId) {
        this.cus = i;
        console.log(i);
      }
    }
    this.customerList.filter(cust => {
      if (cust.topicID === this.topicId) {
        return cust;
      }
    });
    // this._topicService.updateCustomerData()
  }
}
