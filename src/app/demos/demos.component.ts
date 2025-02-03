import { Component } from '@angular/core';

@Component({
  selector: 'app-demos',
  standalone: true,
  imports: [],
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.scss'
})
export class DemosComponent {

	mockUsers: {}[] = [
    {
      firstName: "John",
      lastName: "Doe",
      addr1: "123 Main St",
      addr2: "Apt 4B",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      phone: "212-555-1234",
      email: "john.doe@example.com"
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      addr1: "456 Oak St",
      addr2: "Suite 12",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90015",
      phone: "310-555-5678",
      email: "jane.smith@example.com"
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      addr1: "789 Pine Ave",
      addr2: "Unit 3A",
      city: "Chicago",
      state: "IL",
      zipCode: "60610",
      phone: "312-555-2468",
      email: "michael.johnson@example.com"
    },
    {
      firstName: "Emily",
      lastName: "Davis",
      addr1: "101 Maple Dr",
      addr2: "Floor 2",
      city: "Houston",
      state: "TX",
      zipCode: "77002",
      phone: "713-555-9876",
      email: "emily.davis@example.com"
    },
    {
      firstName: "Robert",
      lastName: "Williams",
      addr1: "202 Birch Rd",
      addr2: "Suite 5C",
      city: "Miami",
      state: "FL",
      zipCode: "33101",
      phone: "305-555-4321",
      email: "robert.williams@example.com"
    }
  ];

  listUsers(mockUsers: any) {
    for (let i = 0; i < mockUsers.length; i++) {
      console.log(`User ${i + 1}:`);
      console.log(`  First Name: ${mockUsers[i].firstName}`);
      console.log(`  Last Name: ${mockUsers[i].lastName}`);
      console.log(`  Address 1: ${mockUsers[i].addr1}`);
      console.log(`  Address 2: ${mockUsers[i].addr2}`);
      console.log(`  City: ${mockUsers[i].city}`);
      console.log(`  State: ${mockUsers[i].state}`);
      console.log(`  Zip Code: ${mockUsers[i].zipCode}`);
      console.log(`  Phone: ${mockUsers[i].phone}`);
      console.log(`  Email: ${mockUsers[i].email}`);
      console.log("-------------------------");
    } 
  }

  ngOnInit() {
    console.log("Page is initialized.");
    this.listUsers(this.mockUsers);
  }

}
