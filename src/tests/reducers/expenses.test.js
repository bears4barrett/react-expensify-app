import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

describe('expenses reducers', () => {
  test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });

  test('should remove expense by id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
  });

  test('should not remove expense if id not found', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });

  test('should add an expense', () => {
    const expense = {
      id: 'testingNewExpense',
      description: '',
      note: '',
      amount: 1000,
      createdAt: moment()
    }
    const action = {
      type: 'ADD_EXPENSE',
      expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
  });

  test('should edit an expense', () => {
    const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[1].id,
      updates: {
        description: 'my update'
      }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe('my update');
  });

  test('should not edit expense if expense not found', () => {
    const action = {
      type: 'EDIT_EXPENSE',
      id: '-1',
      description: 'my update'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
});
