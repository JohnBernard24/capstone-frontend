import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchText: string = '';
  searchResults: string[] = []; 

  itemsToSearch: string[] = [  
    'Item 1',
    'Item 2',
    'Item 3',
  
  ];

  constructor(private router: Router) {} 

  onSearch() {
    if (this.searchText.trim() !== '') {
      this.searchResults = this.itemsToSearch.filter(item =>
        item.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.searchResults = [];
    }
  }

  goToDetailsPage() {
    this.router.navigate(['/profile']); 
  }

  onEnterPressed() {
    if (this.searchText.trim() !== '') {
      // Navigate to the search page (replace '/search' with your desired route)
      this.router.navigate(['/search-user-list']);
    }
  }
}
