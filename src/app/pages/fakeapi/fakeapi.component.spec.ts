import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeapiComponent } from './fakeapi.component';

describe('FakeapiComponent', () => {
  let component: FakeapiComponent;
  let fixture: ComponentFixture<FakeapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
