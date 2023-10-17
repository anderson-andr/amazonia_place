import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

import { TitleCasePipe } from '@angular/common';


@NgModule({
  declarations: [
    ErrorDialogComponent,

  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    TitleCasePipe,
    MatCardModule
  ],
  exports:[
    ErrorDialogComponent

  ]


})
export class SharedModule { }
