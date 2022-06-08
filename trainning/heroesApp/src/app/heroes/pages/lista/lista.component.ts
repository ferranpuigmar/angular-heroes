import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.services';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public heroes: Heroe[] = []
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe(response => this.heroes = [...response])
  }

}
