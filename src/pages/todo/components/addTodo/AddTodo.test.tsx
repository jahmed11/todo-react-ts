
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'utils/testUtils'
import AddTodo from './AddTodo';
import { addTodo } from 'pages/todo/reducer/todoReducer'; 



describe('AddTodo Component', () => {
  it('renders correctly', () => {
    renderWithProviders(<AddTodo />);
    expect(screen.getByRole('button', { name: /Add Todo/i })).toBeInTheDocument();
  });

  it('updates input field on change', () => {
    renderWithProviders(<AddTodo />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New Todo' } });

    expect(input).toHaveValue('New Todo');
  });

  it('dispatches addTodo action with correct value and clears input on button click', () => {
    const mockDispatch = jest.fn();
    jest.spyOn(require('hooks/reduxHooks'), 'useAppDispatch').mockReturnValue(mockDispatch);

    renderWithProviders(<AddTodo />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /Add Todo/i });


    fireEvent.change(input, { target: { value: 'New Todo' } });

    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith(addTodo('New Todo'));
    expect(input).toHaveValue('');
  });
});


// export default {}