import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  data: Array<{ group1_id: number, group_name: string }> = [];
  selectedGroupId: number | null = null;
  selectedGroupName: string | null = null;

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.checkConnection();
  }

  checkConnection(): void {
    this.dbService.checkDatabaseConnection().subscribe(
      (data)=>{
        this.data = data;
      },
      error => {
        console.error('Error occurred:', error); // Debugging
      }
    );
  }

  onSelectedOptionChange(selectedId: number): void {
    this.selectedGroupId = selectedId;
    console.log('Selected Group1 Id:', this.selectedGroupId);
    // Update hidden input value
    const demo1ValueElement = document.getElementById('demo1_value');
    if (demo1ValueElement) {
      demo1ValueElement.innerText = `Value: ${this.selectedGroupId}`;
    }
  }

  onSelectedOptionNameChange(selectedName: string): void {
    this.selectedGroupName = selectedName;
    console.log('Selected Group1 Name:', this.selectedGroupName);
    // Update hidden input value
    const demo1ValueElement1 = document.getElementById('demo1_value');
    if (demo1ValueElement1) {
      demo1ValueElement1.innerText = `Name: ${this.selectedGroupName}`;
    }
  }

}
