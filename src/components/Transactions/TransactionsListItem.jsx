import PropTypes from 'prop-types';
import { TableData,TableRow } from './Transactions.styled';

export const TransactionsListItem = ({type,amount,currency}) => {
    return (
        <TableRow>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
        </TableRow>
    );
}

TransactionsListItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}