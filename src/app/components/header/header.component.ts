import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTerm: string = '';
  suggestions: Array<{ name: string, type: string }> = [];
  selectedValue: string = '';

  constructor(private http: HttpClient) { }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    
    console.log('Input changed:', this.searchTerm); // Debugging

    if (this.searchTerm) {
      const url = `assets/data/search-result.json?q=${this.searchTerm}&amount=5`;
      this.http.get<any>(url).subscribe(data => {
        console.log('Data received:', data); // Debugging
        this.suggestions = data.results;
      }, error => {
        console.error('Error fetching data:', error); // Debugging
      });
    } else {
      this.suggestions = [];
    }
  }

  selectSuggestion(value: string) {
    this.selectedValue = value;
    this.searchTerm = value;
    this.suggestions = [];
  }

  ngOnInit(): void {
  }
}
