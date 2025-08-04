import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { LanguageLevel } from '../../../models/structures/enum';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
 imports: [MatButtonModule, MatMenuModule,RouterModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
 levels = Object.values(LanguageLevel);
}
