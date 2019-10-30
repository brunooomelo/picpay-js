const base = 'https://appws.picpay.com/ecommerce/public';

const payments = {
  base: '/payments',
  refund: (id) => `/payments/${id}/cancellations`,
  status: (id) => `/payments/${id}/status`,
};

export default {
  payments,
  base,
};
