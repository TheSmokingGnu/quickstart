import {Component} from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero-service';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated'

@Component({
  directives: [HeroDetailComponent],
  selector: 'my-heroes',
  templateUrl:'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  ngOnInit() {
    this.getHeroes();
  }
  constructor(private router: Router, private heroService: HeroService) { }
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  heroes: Hero[];

  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
