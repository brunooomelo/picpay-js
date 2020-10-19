const base = 'https://appws.picpay.com/ecommerce/public';

const payments = {
  create: '/payments',
  refund: (id) => `/payments/${id}/cancellations`,
  status: (id) => `/payments/${id}/status`,
};

export default {
  payments,
  base,
};
