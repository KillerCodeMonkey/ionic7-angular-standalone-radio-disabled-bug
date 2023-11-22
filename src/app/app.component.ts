import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonApp, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';

@Component({
  imports: [IonApp, IonRadioGroup, IonRadio, FormsModule],
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  value = "1"

  constructor() {}
}
