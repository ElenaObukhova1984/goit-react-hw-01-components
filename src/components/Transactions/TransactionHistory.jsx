import { TransactionsListItem } from "./TransactionsListItem";
import PropTypes from 'prop-types';
import { TransactionsTable,TableHead,TableRow,TableCell } from "./Transactions.styled";

export const TransactionsHistory = ({items}) => {
    return (
        <TransactionsTable>
        <TableHead>
            <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Currency</TableCell>
            </TableRow>
        </TableHead>

        <tbody>
                {items.map(({id,type,amount,currency}) => (
                    <TransactionsListItem
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                ))
                    
           }
        </tbody>
        </TransactionsTable>
    )
}

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    }).isRequired
  )

};