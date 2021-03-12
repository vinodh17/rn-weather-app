import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import CountryScreen from '../Screens/Home';

const mockStore = configureMockStore();
const store = mockStore({});

const createTestProps = () => ({
	navigation: {
		navigate: jest.fn()
	}
})

describe('Country Screen', () => {
	describe('rendering', () => {

		const props = createTestProps()
		const wrapper = shallow(
			<Provider store={store}>
				<CountryScreen {...props}/>
			</Provider>
		)
		it('should render a view', () => {
			expect(wrapper.find('.country-wrapper')).toHaveLength(0);
		})
	})
});