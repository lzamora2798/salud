import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcuerdoPage } from './acuerdo.page';

describe('AcuerdoPage', () => {
  let component: AcuerdoPage;
  let fixture: ComponentFixture<AcuerdoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcuerdoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
