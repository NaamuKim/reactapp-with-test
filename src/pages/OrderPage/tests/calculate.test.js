import { render, screen } from 'react-dom';
import userEvent from '@testing-library/user-event';
import Type from '../Type';

test("update products's total when products change", async () => {
  render(<Type orderType='products' />);
  const productsTotal = screen.getByText('상품 총 가격:', { exact: false });
  expect(productsTotal).toHaveTextContent('0');

  //아메리카 여행 상품 한 개 올리기
  const americaInput = await screen.findByRole('spinbutton', {
    name: 'America',
  });

  userEvent.clear(americaInput);
  userEvent.type(americaInput, '1');
  expect(productsTotal).toHaveTextContent('1000');
});
