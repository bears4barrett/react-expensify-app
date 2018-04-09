import moment from 'moment';

const now = moment();

export default [{
  id: '1',
  description: 'test description',
  note: 'test note',
  amount: 21,
  createdAt: moment(now).valueOf()
}, {
  id: '2',
  description: 'test two description',
  note: 'test two note',
  amount: 300,
  createdAt: moment(now).subtract(10, 'days').valueOf()
}, {
  id: '3',
  description: 'test three description',
  note: 'test three note',
  amount: 18,
  createdAt: moment(now).add(1, 'month').valueOf()
}];
