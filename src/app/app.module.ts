import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PresentationComponent } from './presentation/presentation.component';
import { DishListComponent } from './dish-list/dish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PresentationComponent,
    DishListComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
