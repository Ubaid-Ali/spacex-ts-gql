import { shallow } from 'enzyme';
import React from 'react';
import Launch from './Launch'


describe(Launch, () => {

    let LaunchWrapper = shallow(<Launch data={{}} handleIdChange={jest.fn} />)

    it('should render an order list ol', () => {
        expect(LaunchWrapper.find("ol").length).toEqual(1);
    });
})