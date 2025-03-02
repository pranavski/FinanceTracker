const TransactionItem = ({ transaction }: { transaction: any }) => {
    return (
      <li className="border p-2 rounded">
        {transaction.category}: ${transaction.amount} ({transaction.type})
      </li>
    );
  };
  
  export default TransactionItem;
  