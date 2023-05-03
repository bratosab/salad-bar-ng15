import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule];

@NgModule({
  imports: [...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES],
})
export class SharedMaterialModule {}
