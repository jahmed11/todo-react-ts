import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'utils/testUtils';
import DisplayTodo from './DisplayTodo';
import { deleteTodo } from 'pages/todo/reducer/todoReducer';

jest.mock('./Todo', () => ({
  __esModule: true,
  default: ({ text, id, onTodoDeleteClick }: any) => (
    <div>
      <span>{text}</span>
      <button onClick={() => onTodoDeleteClick(id)}>Delete</button>
    </div>
  ),
}));

describe('DisplayTodo Component', () => {
  const preloadedState = {
    todo: {
      todoItems: [
        { id: 1, text: 'Todo 1' },
        { id: 2, text: 'Todo 2' },
        { id: 3, text: 'Todo 3' },
        { id: 4, text: 'Todo 4' },
      ],
    },
  };

  it('renders correctly with todos and matches the snapshot', () => {
    const { asFragment } = renderWithProviders(<DisplayTodo />, { preloadedState });
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct number of Todo components based on todoItems length', () => {
    renderWithProviders(<DisplayTodo />, { preloadedState });

    const todoItems = screen.getAllByText(/Todo \d/);
    expect(todoItems.length).toBe(4);
  });

  it('calls onTodoDeleteClick with the correct id when delete button is clicked', () => {
    const mockDispatch = jest.fn();
    jest.spyOn(require('hooks/reduxHooks'), 'useAppDispatch').mockReturnValue(mockDispatch);

    renderWithProviders(<DisplayTodo />, { preloadedState });

    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    expect(mockDispatch).toHaveBeenCalledWith(deleteTodo(1));
  });
});
