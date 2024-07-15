import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IFormData } from '../../../shared/interfaces';
import {
  DATA_HOUSE,
  LIST_FORM_DATA,
  LIST_NAME_TYPE,
} from '../../../shared/constants';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './form-data.component.html',
  styleUrl: './form-data.component.scss',
})
export class FormDataComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  routeName: string = '';
  routeAction: string = '';
  // housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  formData: any = {};
  formUI: IFormData[] = [];
  title: string = '';
  ngOnInit() {
    // console.log((this.route.snapshot as any)._routerState.url);
    // console.log(this.route.snapshot.url[0].path);
    this.routeName = (this.route.snapshot as any)._routerState.url.split(
      '/'
    )[1];
    this.routeAction = this.route.snapshot.url[0].path;
    LIST_NAME_TYPE.forEach((item) => {
      if (item.name === this.routeName) {
        this.title = item.title;
      }
    });
    const index = LIST_FORM_DATA.findIndex(
      (item) => item.type === this.routeName
    );
    if (index !== -1) {
      console.log(LIST_FORM_DATA[index].data);
      this.formUI = LIST_FORM_DATA[index].data;
      for (const item of LIST_FORM_DATA[index].data) {
        this.formData[item.params] = item.data;
      }
      // this.formData = LIST_FORM_DATA[index].data;
      // console.log(LIST_FORM_DATA[index].data);
    }
  }
  isActive = false;
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  submitAction() {
    console.log('submit action');
    console.log(this.formData);
    if (this.routeAction === 'add' && this.routeName === 'rent-house') {
      const params: any = {
        id: DATA_HOUSE.locations.length + 1,
        photo:
          'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
      };
      // for (const item of this.formData) {
      //   // params[item.params] = item.data;
      // }
      // this.housingService.addHousingLocation(this.formData);
    }
  }
}
