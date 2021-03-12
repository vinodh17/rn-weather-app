import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import WeatherScreen from '../Screens/Weather';

const mockStore = configureMockStore();
const store = mockStore({});

const createTestProps = () => ({
	navigation: {
		navigate: jest.fn()
	}
})

describe('Weather Screen', () => {
	describe('rendering', () => {

		const props = createTestProps()
		const wrapper = shallow(
			<Provider store={store}>
				<WeatherScreen {...props}/>
			</Provider>
		)
		it('should render a view', () => {
			expect(wrapper.find('.weather-wrapper')).toHaveLength(0);
		})
	})
});