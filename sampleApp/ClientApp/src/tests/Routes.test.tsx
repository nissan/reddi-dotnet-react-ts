import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter } from 'react-router';
import ErrorPageTemplate from '../components/templates/ErrorPageTemplate';
import HomePageTemplate from '../components/templates/HomePageTemplate';
import Routes from '../routing/Routes';

jest.mock('../components/App');

test('invalid path should redirect to 404', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/random']}>
            <Routes />
        </MemoryRouter>
    );
    expect(wrapper.find(HomePageTemplate).length).toBe(0);
    expect(wrapper.find(ErrorPageTemplate).length).toBe(1);
});

test('valid path should not redirect to 404', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <Routes />
        </MemoryRouter>
    );
    expect(wrapper.find(HomePageTemplate).length).toBe(1);
    expect(wrapper.find(ErrorPageTemplate).length).toBe(0);
});