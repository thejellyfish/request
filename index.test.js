const fetchjson = require('./index');
global.fetch = require('node-fetch');

// Start tests ...
/* eslint-disable no-undef */
describe('fetchjson', () => {
  // Fetch data successfully
  it('expect JSON while fetching API', async () => {
    const result = await fetchjson('https://reqres.in/api/users', { per_page: 1 });

    expect(result).toMatchObject(
      expect.objectContaining({
        data: expect.any(Array),
      }),
    );
  });

  // Fetch data successfully
  it('expect JSON while fetching with GET prefix', async () => {
    const result = await fetchjson('GET https://reqres.in/api/users', { per_page: 1 });

    expect(result).toMatchObject(
      expect.objectContaining({
        data: expect.any(Array),
      }),
    );
  });

  // Fetch data successfully
  it('expect JSON while fetching with POST prefix', async () => {
    const result = await fetchjson('POST https://reqres.in/api/users', { name: 'John' });

    expect(result).toMatchObject(
      expect.objectContaining({
        name: 'John',
      }),
    );
  });

  // Fetch data successfully
  it('expect JSON while fetching with a default hostname', async () => {
    // Fetch
    const result = await fetchjson('users', { per_page: 1 }, { hostname: 'https://reqres.in/api' });

    expect(result).toMatchObject(
      expect.objectContaining({
        data: expect.any(Array),
      }),
    );
  });

  // Callback
  it('expect response while fetching API', async () => {
    // Fetch
    const payload = await fetchjson('https://reqres.in/api/users', { per_page: 1 });

    // Tests
    expect(payload._response).toEqual(expect.objectContaining({
      ok: expect.any(Boolean),
      status: expect.any(Number),
    }));
  });
});
