import { Container } from "./styles";

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento </td>
            <td>28/03/2015</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$500</td>
            <td>casa </td>
            <td>28/03/2015</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}