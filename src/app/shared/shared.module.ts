import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material CDK
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { ZoomableImageComponent, ZoomedInImage } from './components/zoomable-image/zoomable-image.component';
import { PreviewLocalImagePipe } from './pipes/preview-local-image.pipe';
// Group material modules for headless injection
const materialModules = [
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatCardModule,
  MatIconModule,
  MatSortModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatChipsModule,
  MatGridListModule,
];

@NgModule({
  declarations: [
    ZoomableImageComponent,
    PreviewLocalImagePipe
  ],
  imports: [
    ...materialModules,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ZoomableImageComponent,
    ...materialModules,
    PreviewLocalImagePipe
  ]
})
export class SharedModule { }
