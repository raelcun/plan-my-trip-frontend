import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const happyPath = [
    rest.get('/rest/', (req, res, ctx) => res(ctx.text('test response')))
]

export const registerJestServer = () => {
    const server = setupServer()

    beforeAll(() => server.listen())
    beforeEach(() => server.resetHandlers())
    afterAll(() => server.close())

    return server
}