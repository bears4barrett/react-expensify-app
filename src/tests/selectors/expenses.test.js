import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

const now = moment();

let filters;
beforeEach(() => {
  filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
});

describe('expense selector', () => {

  test('should filter by text value', () => {
    filters.text = 'two';
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1]]);
  });

  test('should filter by start date', () => {
    filters.startDate = moment(now);
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
  });

  test('should filter by end date', () => {
    filters.endDate = moment(now);
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
  });

  test('should sort by date', () => {
    filters.sortBy = 'date';
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
  });

  test('should sort by amount', () => {
    filters.sortBy = 'amount';
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
  });

});
