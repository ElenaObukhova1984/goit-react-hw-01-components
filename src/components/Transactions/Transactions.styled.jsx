import styled from 'styled-components';

export const TransactionsTable = styled.table`
margin: 100px auto;
width: 300px;
height: 400px;
border-radius: 12px;
`;

export const TableHead = styled.thead`
background-color: #00bcd5;
`;

export const TableRow = styled.tr`
:nth-child(even) {
    background-color: #ecf1f3;
}
`;


export const TableCell = styled.th`
color: white;
padding: 10px;
text-transform: uppercase;
`;

export const TableData = styled.td`
padding: 10px 10px 20px 40px;
text-transform: capitalize;
`;