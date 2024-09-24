import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    text: 'Test Todo',
    done: false
  }

  render(<Todo todo={todo} deleteTodo={() => console.log('delete dummy')} completeTodo={() => console.log('complete dummy')}/>)

  const element = screen.getByText('Test Todo')
  expect(element).toBeDefined()
})