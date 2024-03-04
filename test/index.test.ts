import { describe, expect, it } from 'bun:test'
import { Elysia } from 'elysia';

describe('Elysia', () => {
    it('Return a response', async () => {
        const app = new Elysia().get('/', () => 'hi')

        const response = await app
            .handle(new Request('http://localhost:3000/'))
            .then((res) => res.text())

        expect(response).toBe('hi')
    })
})
