import { Component } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {

  role = "mentor"
  isRequestAccepted: boolean = false;
  isRequestRejected: boolean = false;
  mentorData = [
    {
      "name":"Shahira Shahir",
      "bank": "Hsbc",
      "coverLetter":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nobis quidem esse explicabo reiciendis nihil expedita nesciunt accusantium exercitationem. Repellendus excepturi expedita fugiat illo temporibus quae minus quis quod in.",
      "profile-pic":"./assets/img/theme/team-1-800x800.jpg",
      isRequestAccepted: false,
      isRequestRejected: false
    },
    {
      "name":"Samira Samir",
      "bank": "Alahly",
      "coverLetter":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nobis quidem esse explicabo reiciendis nihil expedita nesciunt accusantium exercitationem. Repellendus excepturi expedita fugiat illo temporibus quae minus quis quod in.",
      "profile-pic":"./assets/img/theme/team-2-800x800.jpg",
      isRequestAccepted: false,
      isRequestRejected: false
    },
    {
      "name":"Bahira Bahir",
      "bank": "Misr",
      "coverLetter":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nobis quidem esse explicabo reiciendis nihil expedita nesciunt accusantium exercitationem. Repellendus excepturi expedita fugiat illo temporibus quae minus quis quod in.",
      "profile-pic":"./assets/img/theme/team-3-800x800.jpg",
      isRequestAccepted: false,
      isRequestRejected: false
    },
    {
      "name":"Saeda Saed",
      "bank": "QNB",
      "coverLetter":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nobis quidem esse explicabo reiciendis nihil expedita nesciunt accusantium exercitationem. Repellendus excepturi expedita fugiat illo temporibus quae minus quis quod in.",
      "profile-pic":"./assets/img/theme/team-4-800x800.jpg",
      isRequestAccepted: false,
      isRequestRejected: false
    },
    {
      "name":"Galeela Galeel",
      "bank": "Mannndd",
      "coverLetter":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nobis quidem esse explicabo reiciendis nihil expedita nesciunt accusantium exercitationem. Repellendus excepturi expedita fugiat illo temporibus quae minus quis quod in.",
      "profile-pic":"./assets/img/theme/team-1-800x800.jpg",
      isRequestAccepted: false,
      isRequestRejected: false
    },
    {
      "name":"Alia Ali",
      "bank": "Hsbc",
      "coverLetter":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nobis quidem esse explicabo reiciendis nihil expedita nesciunt accusantium exercitationem. Repellendus excepturi expedita fugiat illo temporibus quae minus quis quod in.",
      "profile-pic":"./assets/img/theme/team-2-800x800.jpg",
      isRequestAccepted: false,
      isRequestRejected: false
    },
    {
      "name":"Haida Hady",
      "bank": "Hsbc",
      "coverLetter":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nobis quidem esse explicabo reiciendis nihil expedita nesciunt accusantium exercitationem. Repellendus excepturi expedita fugiat illo temporibus quae minus quis quod in.",
      "profile-pic":"./assets/img/theme/team-3-800x800.jpg",
      isRequestAccepted: false,
      isRequestRejected: false
    },
    {
      "name":"Kamila Kamil",
      "bank": "Hsbc",
      "coverLetter":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nobis quidem esse explicabo reiciendis nihil expedita nesciunt accusantium exercitationem. Repellendus excepturi expedita fugiat illo temporibus quae minus quis quod in.",
      "profile-pic":"./assets/img/theme/team-4-800x800.jpg",
      isRequestAccepted: false,
      isRequestRejected: false
    },
  ]

  headers = ["Mentor lists","Scheduled Date","Scheduled Timing","Status"]
  menteeData = [
    {
        "mentor": 'Mentor 1',
        "profile-pic": './assets/img/theme/team-1-800x800.jpg',
        "scheduledDate1": '2023-06-18',
        "scheduledDate2": '2023-06-19',
    },
    {
        "mentor": 'Mentor 2',
        "profile-pic": './assets/img/theme/team-2-800x800.jpg',
        "scheduledDate1": '2023-06-18',
        "scheduledDate2": '2023-06-19',
    },
    {
        "mentor": 'Mentor 3',
        "profile-pic": './assets/img/theme/team-3-800x800.jpg',
        "scheduledDate1": '2023-05-22',
        "scheduledDate2": '2023-06-26',
    },
    {
        "mentor": 'Mentor 4',
        "profile-pic": './assets/img/theme/team-4-800x800.jpg',
        "scheduledDate1": '2023-06-18',
        "scheduledDate2": '2023-06-19',
    },
    {
        "mentor": 'Mentor 5',
        "profile-pic": './assets/img/theme/team-4-800x800.jpg',
        "scheduledDate1": '2023-06-18',
        "scheduledDate2": '2023-06-19',
    }
]
  acceptRequest(item: any) {

    item.isRequestAccepted = true;
  }

  rejectRequest(item: any) {

    item.isRequestRejected = true;
  }
}
