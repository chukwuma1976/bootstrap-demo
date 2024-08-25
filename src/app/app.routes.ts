import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardComponent } from './card/card.component';
import { TypographyComponent } from './typography/typography.component';
import { ImagesComponent } from './images/images.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { FlexComponent } from './flex/flex.component';
import { PopupComponent } from './popup/popup.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'container', component: ContainerComponent },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'card', component: CardComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'images', component: ImagesComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'flex', component: FlexComponent },
    { path: 'popup', component: PopupComponent }
];
