import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditCompPage } from './edit-comp.page';

describe('EditCompPage', () => {
  let component: EditCompPage;
  let fixture: ComponentFixture<EditCompPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
