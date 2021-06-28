import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewSleepinessPage } from './view-sleepiness.page';

describe('ViewSleepinessPage', () => {
  let component: ViewSleepinessPage;
  let fixture: ComponentFixture<ViewSleepinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSleepinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSleepinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
