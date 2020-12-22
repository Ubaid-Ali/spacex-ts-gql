import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header'

describe(Header, () => {


    let wrapper = shallow(<Header handleshow={jest.fn} />)

    it('should render a button ', () => {
        expect(wrapper.find('button').length).toEqual(1);
    })
})