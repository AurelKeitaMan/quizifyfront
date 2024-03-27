import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCategoryPageComponent } from './pages/create-category-page/create-category-page.component';
import { CreateQuestionPageComponent } from './pages/create-question-page/create-question-page.component';
import { EditCategoryPageComponent } from './pages/edit-category-page/edit-category-page.component';
import { EditQuestionPageComponent } from './pages/edit-question-page/edit-question-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlayToQuizComponent } from './pages/play-to-quiz/play-to-quiz.component';
import { QuestCategorizerComponent } from './pages/quest-categorizer/quest-categorizer.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { MyStatsPageComponent } from './pages/my-stats-page/my-stats-page.component';
import { FormQuestionComponent } from './components/form-question/form-question.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { IconComponent } from './components/icon/icon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormResponseComponent } from './components/form-response/form-response.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlayToQuizComponent,
    QuestCategorizerComponent,
    PageNotFoundComponent,
    ResultPageComponent,
    AdminPageComponent,
    CreateCategoryPageComponent,
    EditCategoryPageComponent,
    MyStatsPageComponent,
    NavBarComponent,
    EditQuestionPageComponent,
    CreateQuestionPageComponent,
    FormQuestionComponent,
    FormCategoryComponent,
    IconComponent,
    FormResponseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
