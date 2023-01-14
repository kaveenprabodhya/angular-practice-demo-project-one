import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { FormsModule } from '@angular/forms';
import { Courses2Component } from './courses2.component';
import { SummeryPipe } from './summery.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleComponent } from './title/title.component';
import { TitleCaseCustomePipe } from './title/title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    Courses2Component,
    SummeryPipe,
    FavouriteComponent,
    TitleComponent,
    TitleCaseCustomePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
