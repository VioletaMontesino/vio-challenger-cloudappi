import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'front'`, () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('front');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(UserComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('front app is running!');
  });
});
