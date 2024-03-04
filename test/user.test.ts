import { describe, expect, it } from 'bun:test'
import { Elysia } from 'elysia';

const app  = new Elysia();

describe('CREATE Users suite', () => {

  it('should fail to create a user that already exists', async () => {

    const existingUser = {
      email: 'jack31g@doe.com',
      password: 'test123'
    }

    const expected = {
      message: 'Resource already exists!'
    };

    const req = new Request("localhost:3000/api/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(existingUser)
    });

    const res = await app.fetch(req);
    expect(res.status).toEqual(422);

    const responseBody = await res.json();
    expect(responseBody.message).toEqual(expected.message);
  });

})