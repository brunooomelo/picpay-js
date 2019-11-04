import fetch from 'node-fetch';
import ApiError from './error';
import routes from './routes';

function buildRequestParams(method, url, options, payload) {
  return {
    url,
    params: {
      method,
      headers: options,
      body: JSON.stringify(payload),
    },
  };
}

function handleError(response) {
  if (response.status === 500) {
    return Promise.reject(
      new ApiError('picpay server error'),
    );
  }

  return response.json()
    .then((body) => Promise.reject(
      new ApiError(Object.assign(body, { status: response.status })),
    ));
}

function handleResult(response) {
  const contentType = response.headers.get('Content-Type');
  if (response.ok) {
    if (contentType.includes('application/json')) {
      return response.json();
    }
    return response.text();
  }

  return handleError(response);
}

function buildRequest(method) {
  return function request(options = {}, path, body = {}) {
    const endpoint = routes.base + path;
    const { url, params } = buildRequestParams(method, endpoint, options, body);
    return fetch(url, params).then(handleResult);
  };
}

export default {
  get: buildRequest('GET'),
  post: buildRequest('POST'),
};
