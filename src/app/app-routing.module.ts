import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlayToQuizComponent } from './pages/play-to-quiz/play-to-quiz.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { EditQuestionPageComponent } from './pages/edit-question-page/edit-question-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CreateCategoryPageComponent } from './pages/create-category-page/create-category-page.component';
import { CreateQuestionPageComponent } from './pages/create-question-page/create-question-page.component';
import { EditCategoryPageComponent } from './pages/edit-category-page/edit-category-page.component';
import { MyStatsPageComponent } from './pages/my-stats-page/my-stats-page.component';
import { QuestCategorizerComponent } from './pages/quest-categorizer/quest-categorizer.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'quiz', component: PlayToQuizComponent },
  { path: 'quiz/question/:id', component: QuestionPageComponent },
  { path: 'quiz/result', component: ResultPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'admin/category/create', component: CreateCategoryPageComponent },
  { path: 'admin/category/:id', component: QuestCategorizerComponent },
  { path: 'admin/category/edit/:id', component: EditCategoryPageComponent },
  { path: 'admin/question/create/:id', component: CreateQuestionPageComponent },
  { path: 'admin/question/edit/:idCat/:id', component: EditQuestionPageComponent },
  { path: 'myStats', component: MyStatsPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
