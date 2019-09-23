import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-routing-stepper',
  templateUrl: './routing-stepper.component.html',
  styleUrls: ['./routing-stepper.component.scss']
})
export class RoutingStepperComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  public subPhase = 0;
  public totalPhases = 0;
  public progress = 0;

  private routeObservable: Subscription;

  private calculateProgress() {
    const routeConfig = this.activeRoute.routeConfig;
    this.totalPhases = routeConfig.children.length;
    this.subPhase = routeConfig.children.findIndex(childConf => childConf === this.activeRoute.snapshot.children[0].routeConfig) + 1;
    this.progress = (this.totalPhases && this.subPhase) ?
      100 / this.totalPhases * this.subPhase :
      0;
  }

  ngOnInit() {
    this.calculateProgress();
    this.routeObservable = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.calculateProgress();
      }
    });
  }

  ngOnDestroy() {
    if (this.routeObservable) {
      this.routeObservable.unsubscribe();
    }
  }

}
