import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';







//1
test("Verifica che il componente Welcome venga montato correttamente", () => {
  render(<App />);
  const welcome = screen.getByText("Welcome to EpiBook!");
  expect(welcome).toBeInTheDocument();
});

/* 
//2

test("Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato", () => {
  render(<App />);
  const cards = screen.getAllByTestId("card");
  expect(cards).toHaveLength(150)
})

//3

test("Verifica che il componente CommentArea venga renderizzato correttamente", () => {
  render(<App />);
  const CommentArea = screen.getByText("Commenta");
  expect(CommentArea).toBeInTheDocument();
})

//5
test('(2)Verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto', () => { 
  render(<App />);
  const Searchbar = screen.getByPlaceholderText("Cerca un libro...");
  fireEvent.change(Searchbar, { target: { value:"star wars"}})
  const filteredCards = screen.getAllByTestId("book-card");
  expect(filteredCards).toHaveLength(3)
})

//6










 */