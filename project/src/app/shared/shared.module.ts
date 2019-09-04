import { NgModule } from '@angular/core';

// Angular Components
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Custom Components
import { StarComponent } from './star/star.component';

// Custom Pipes
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    ConvertToSpacesPipe
  ]
})

export class SharedModule { }
