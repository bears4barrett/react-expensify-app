import moment from 'moment';
import filtersReducer from '../../reducers/filters';

describe('filters reducers', () => {
  test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('day'),
      endDate: moment().endOf('day')
    });
  });

  test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
  });

  test('should set sortBy to date', () => {
    const currentState = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
  });

  test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'testing' });
    expect(state.text).toBe('testing');
  });

  test('should set startDate filter', () => {
    const now = moment();
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: now });
    expect(state.startDate).toBe(now);
  });

  test('should set endDate filter', () => {
    const now = moment();
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: now  });
    expect(state.endDate).toBe(now);
  });
});
