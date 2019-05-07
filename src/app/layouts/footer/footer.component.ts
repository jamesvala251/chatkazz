import { Component } from '@angular/core';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  year = Utils.getCopyrightYear();
}
