import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../../shared/interfaces/housing-location.interface';
import { HousingService } from '../../../core/services/housing.service';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from '../../../core/directives/hoverHightlight.directive';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    RouterModule,
    HighlightDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('filter') filter: ElementRef<HTMLInputElement> | null = null;
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
  searchEnter(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  addHousingLocationToSearchBar(housingLocationName: string) {
    (this.filter?.nativeElement as HTMLInputElement).value =
      housingLocationName;
  }
  clearFilter() {
    this.filterResults('');
    if (this.filter?.nativeElement) {
      (this.filter?.nativeElement as HTMLInputElement).value = '';
    }
  }
  ngOnInit() {}
}
