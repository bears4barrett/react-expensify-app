import {
  setTextFilter,
  setSortByDate,
  setSortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';
import moment from 'moment';

describe('filter actions', () => {

  test('should generate set text filter action object with default value', () => {
    expect(setTextFilter()).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
    });
  });

  test('should generate set text filter action object with provided value', () => {
    expect(setTextFilter('testing')).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'testing'
    });
  });

  test('should generate sort by date action object', () => {
    expect(setSortByDate()).toEqual({
      type: 'SORT_BY_DATE'
    });
  });

  test('should generate sort by amount action object', () => {
    expect(setSortByAmount()).toEqual({
      type: 'SORT_BY_AMOUNT'
    });
  });

  test('should generate set start date filter action object', () => {
    const now = moment();
    expect(setStartDate(now)).toEqual({
      type: 'SET_START_DATE',
      startDate: now
    });
  });

  test('should generate set end date filter action object', () => {
    const now = moment();
    expect(setEndDate(now)).toEqual({
      type: 'SET_END_DATE',
      endDate: now
    });
  });

});
