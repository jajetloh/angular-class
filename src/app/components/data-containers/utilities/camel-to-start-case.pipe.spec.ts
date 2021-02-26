import { CamelToStartCasePipe } from './camel-to-start-case.pipe'

describe('StartCasePipe', () => {
  it('create an instance', () => {
    const pipe = new CamelToStartCasePipe()
    expect(pipe).toBeTruthy()
  })
})
