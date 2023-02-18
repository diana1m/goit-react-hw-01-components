import PropTypes from 'prop-types';
import { Table, TablesHead, TableBody, Row, Cell } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) =>{
    return (
        <Table>
            <TablesHead>
                <tr>
                <Cell>Type</Cell>
                <Cell>Amount</Cell>
                <Cell>Currency</Cell>
                </tr>
            </TablesHead>

            <TableBody>
                {items.map(item=>(
                <Row key={item.id}>
                <Cell>{item.type}</Cell>
                <Cell>{item.amount}</Cell>
                <Cell>{item.currency}</Cell>
                </Row>
                ))}
            </TableBody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ).isRequired,
}