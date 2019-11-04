import request from '../request';
import routes from '../routes';

const create = (options, body) => request.post(options, routes.payments.create, body);
const refund = (options, body) => request.post(options, routes.payments.refund(body.id), body);
const status = (options, body) => request.post(options, routes.payments.status(body.id), body);

export default {
  create,
  refund,
  status,
};
