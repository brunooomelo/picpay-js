import request from '../request';
import routes from '../routes';

const create = (options, body) => request.post(options, routes.payments.create, body);
const refund = (options, params, body) => request.post(options, routes.payments.refund(params), body);
const status = (options, params) => request.get(options, routes.payments.status(params));

export default {
  create,
  refund,
  status,
};
