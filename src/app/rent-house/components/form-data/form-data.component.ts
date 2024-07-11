import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IFormData } from '../../../shared/interfaces';
import { LIST_FORM_DATA } from '../../../shared/constants';
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
  formData: IFormData[] = [];
  ngOnInit() {
    console.log((this.route.snapshot as any)._routerState.url);
    console.log(this.route.snapshot.url[0].path);
    this.routeName = (this.route.snapshot as any)._routerState.url.split(
      '/'
    )[1];
    this.routeAction = this.route.snapshot.url[0].path;
    const index = LIST_FORM_DATA.findIndex(
      (item) => item.type === this.routeName
    );
    if (index !== -1) {
      this.formData = LIST_FORM_DATA[index].data;
      console.log(LIST_FORM_DATA[index].data);
    }
  }
  isActive = false;
  submitAction() {
    console.log('submit action');
    console.log(this.formData);
  }
}
