import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';







//1
test("Verifica che il componente Welcome venga montato correttamente", () => {
  render(<App />);
  const welcome = screen.getByText("Welcome to EpiBook!");
  expect(welcome).toBeInTheDocument();
});


//2

test("Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato", () => {
  render(<App />);
  const cards = screen.getAllByTestId("card-single-book");
  expect(cards).toHaveLength(150)
});

//3

test("Verifica che il componente CommentArea venga renderizzato correttamente", () => {
  render(<App />);
  const btnDetail = screen.getAllByRole('button', {name: /Book Details/i})
  fireEvent.click(btnDetail[0])
  const CommentArea = screen.getAllByPlaceholderText(/Commenta qui.../i);
  expect(commentArea[0]).toBeInTheDocument()
})


//4

test("Verifica che il filtraggio della navbar si comporti in maniera corretta", async () => {
  render(<App />);


  const Search = screen.getByPlaceholderText(/Cera un libro.../i); 
  fireEvent.change(Search, { target: { value: 'Grimoire' } });
  const cards = await screen.findAllByTestId("card-single-book");

  // Verifica che rimanga un solo libro visibile dopo il filtraggio
  expect(cards).toHaveLength(1);
});




