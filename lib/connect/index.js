import transaction from '../transaction';

const buildTransaction = (options) => ({
  transaction: {
    status: transaction.status.bind(null, options),
    refund: transaction.refund.bind(null, options),
    create: transaction.create.bind(null, options),
  },
});
const buildResolve = (options) => buildTransaction(options);
const strategies = (options) => {
  if (!options) {
    return Promise.reject(new Error('You must supply a valid API key'));
  }
  return Promise.resolve({
    'x-picpay-token': options,
    'Content-Type': 'application/json',
  });
};
const connect = (token) => strategies(token).then(buildResolve);

export default connect;
