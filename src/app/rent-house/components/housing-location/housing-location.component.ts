import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../../shared/interfaces/housing-location.interface';
import { RouterModule } from '@angular/router';
import { ListProductModule } from '../../../shopping/component/list-product/list-product.module';
import { VndPipe } from '../../../core/pipes/vndpipe.pipe';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule, CommonModule, ListProductModule, VndPipe],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss',
})
export class HousingLocationComponent {
  @ContentChildren('housingNameBtn')
  housingNameBtn: ElementRef | null = null;
  @Input() housingLocation!: HousingLocation;
  @Output() addToSearchBar = new EventEmitter<string>();
  addHousingLocationToSearchBar(housingLocationName: string) {
    this.addToSearchBar.emit(housingLocationName);
  }
  ngAfterContentInit() {
    // console.log();
    (this.housingNameBtn as any).forEach((element: any) => {
      // console.log(element.nativeElement);
    });
  }
}
