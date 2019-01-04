import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreCardComponent } from 'src/app/score-card/score-card.component';
import { ScorerComponent } from 'src/app/scorer/scorer.component';
import { CommentryComponent } from 'src/app/commentry/commentry.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { CricketscoreappComponent } from './cricketscoreapp/cricketscoreapp.component';
import { DefineplayersComponent } from 'src/app/defineplayers/defineplayers.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  
  { path: 'home', component:CricketscoreappComponent },
  {path:'defplayer',component:DefineplayersComponent},
  {path:'summary',component:SummaryComponent},
  {path:'Admin',component:ScorerComponent},
    {path:'ScoreCard',component:ScoreCardComponent},
    {path:'Commentry',component:CommentryComponent},
  { path: '**', redirectTo: 'header' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
