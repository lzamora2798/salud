import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConasaPage } from './conasa.page';

describe('ConasaPage', () => {
  let component: ConasaPage;
  let fixture: ComponentFixture<ConasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConasaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
