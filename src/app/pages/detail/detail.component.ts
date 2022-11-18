import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';
import {Observable, tap} from 'rxjs'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  id!: string;
  card$!: Observable<Card>;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.card$ = this.cardService.getCard(this.id).pipe(tap(console.log));
  }
}
