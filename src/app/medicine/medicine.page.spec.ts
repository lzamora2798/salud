import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicinePage } from './medicine.page';

describe('MedicinePage', () => {
  let component: MedicinePage;
  let fixture: ComponentFixture<MedicinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
