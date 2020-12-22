import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header'
import App from './App';

describe(App, () => {

  let container: any;
  let headerWrapper: any

  beforeEach(() => container = shallow(<App />))
  beforeEach(() => headerWrapper = shallow(<Header handleshow={Function} />))

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1);
  });

  it("should render <Header /> component", () => {
    expect(container.find("Header").length).toEqual(1)
  })

  it("should render <LaunchContainer /> component", () => {
    expect(container.find("Header").length).toEqual(1)
  })

  it("should render LaunchContainer when click on \'SHOW LAUNCHES\' button", () => {
    headerWrapper.find("#handleshow-id").simulate("click")
    expect(container.find("LaunchContainer").length).toEqual(1)
  })

  it("should render a <Footer /> component", () => {
    expect(container.find("Footer").length).toEqual(1)
  })

});

