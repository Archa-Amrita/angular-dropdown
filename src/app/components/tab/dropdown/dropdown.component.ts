import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() options: Array<{ group1_id: number }> = [];
  @Input() nameOptions: Array<{ group1_name: string }> = [];
  
  @Output() selectedOption = new EventEmitter<number>();
  @Output() selectedNameOption = new EventEmitter<string>();


  selectedValue: number | null = null; // Track the selected value
  selectedName: string | null = null; // Track the selected value
  showLabel: boolean = true; // Track the label visibility

  onSelectedOptionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedId = Number(target.value);
    this.selectedValue = selectedId;
    this.selectedOption.emit(selectedId);
    this.showLabel = !this.selectedValue; // Hide label if a value is selected
  }

  onSelectedOptionNameChange(event1: Event): void {
    const target = event1.target as HTMLSelectElement;
    const selectedName = String(target.value);
    this.selectedName = selectedName;
    this.selectedNameOption.emit(selectedName);
    this.showLabel = !this.selectedValue; // Hide label if a value is selected
  }

  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
