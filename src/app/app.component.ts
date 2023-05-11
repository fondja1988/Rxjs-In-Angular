import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Learning RXJS in Angular`;
  constructor() {
    of(4, 1, 9).subscribe(
      {
        next: item => console.log(item)
      }
    );
    from([7, 6, 0]).subscribe({
      next: item => console.log(`from observable ${item}`)
    });
    of(...['narcisse', 'carvalo', 'johanna', 'chloe']).subscribe(
    {
      next: el => console.log(el),
      error: err => console.log(err),
      complete: () => console.log(`the fine`)
    }
    )
  }
}
