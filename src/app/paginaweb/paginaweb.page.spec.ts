import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginawebPage } from './paginaweb.page';

describe('PaginawebPage', () => {
  let component: PaginawebPage;
  let fixture: ComponentFixture<PaginawebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginawebPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginawebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
