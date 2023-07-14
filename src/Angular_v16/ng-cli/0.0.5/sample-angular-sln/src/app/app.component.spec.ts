import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  })

  it('should have a title sample-angular-sln', () => {
    expect(fixture.title).toEqual('sample-angular-sln');
  })

});