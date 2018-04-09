import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

describe('expense actions', () => {

  test('should generate remove expense action object', () => {
    const action = removeExpense('1');
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '1'
    });
  });

  test('should generate edit expense action object', () => {
    const action = editExpense('1', { description: 'test description', amount: 500 });
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '1',
      updates: {
        description: 'test description',
        amount: 500
      }
    });
  });

  test('should generate add expense action object with default values', () => {
    const action = addExpense({});
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      }
    });
  });

  test('should generate add expense action object with provided values', () => {
    const expenseData = {
      description: 'foo',
      note: 'bar',
      amount: 100,
      createdAt: 200
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
  });

});
