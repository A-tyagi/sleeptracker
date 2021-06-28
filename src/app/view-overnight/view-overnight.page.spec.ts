import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewOvernightPage } from './view-overnight.page';

describe('ViewOvernightPage', () => {
  let component: ViewOvernightPage;
  let fixture: ComponentFixture<ViewOvernightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOvernightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOvernightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
