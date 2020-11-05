import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConameiPage } from './conamei.page';

describe('ConameiPage', () => {
  let component: ConameiPage;
  let fixture: ComponentFixture<ConameiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConameiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConameiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
