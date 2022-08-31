import { Component } from '@angular/core';
import {
  Event, NavigationCancel,
  NavigationEnd,
  NavigationError, NavigationStart, Router
} from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP CRUD';
  loader = this.loadingBar.useRef();

  constructor(private loadingBar: LoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loader.start();
    }

    if (event instanceof NavigationEnd) {
      this.loader.complete();
    }

    if (event instanceof NavigationCancel) {
      this.loader.stop();
    }

    if (event instanceof NavigationError) {
      this.loader.stop();
    }
  }
}
