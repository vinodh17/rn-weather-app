import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import HomeScreen from '../Screens/Home';

const mockStore = configureMockStore();
const store = mockStore({});

const createTestProps = () => ({
	navigation: {
		navigate: jest.fn()
	}
})

describe('Users Screen', () => {
	describe('rendering', () => {

		const props = createTestProps()
		const wrapper = shallow(
			<Provider store={store}>
				<HomeScreen {...props}/>
			</Provider>
		)
		it('should render a view', () => {
			expect(wrapper.find('.home-wrapper')).toHaveLength(0);
		})
	})
});