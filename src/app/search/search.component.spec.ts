import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';



describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit searchUsername event with username value', () => {
    const username = 'testuser';
    spyOn(component.searchUsername, 'emit');
    component.username = username;
    const searchButton = fixture.debugElement.query(By.css('button'));
    searchButton.triggerEventHandler('click', null);
    expect(component.searchUsername.emit).toHaveBeenCalledWith(username);
  });

  it('should emit searchUsername event when search method is called', () => {
    const username = 'testuser';
    spyOn(component.searchUsername, 'emit');
    component.username = username;
    component.search();
    expect(component.searchUsername.emit).toHaveBeenCalledWith(username);
  });
});


