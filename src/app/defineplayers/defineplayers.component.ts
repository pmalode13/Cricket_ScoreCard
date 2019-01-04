import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Players1Service } from '../Services/players1.service';
import { Player2Service } from '../Services/player2.service';
import { MatchService } from '../Services/match.service';

@Component({
  selector: 'app-defineplayers',
  templateUrl: './defineplayers.component.html',
  styleUrls: ['./defineplayers.component.css']
})
export class DefineplayersComponent implements OnInit {

  constructor(private router:Router,private route :ActivatedRoute,public matchserv:MatchService) {
    console.log(matchserv.maTch[0])
   }

  ngOnInit() {
  }

  onStartMatchClicked()
  {
    this.router.navigate(['/summary'],{relativeTo:this.route}); 
  }
}
