import { PieChart, Pie, Tooltip } from "recharts";

const ExpenseChart = ({ transactions }: { transactions: any[] }) => {
  const data = transactions.reduce((acc: any[], tx) => {
    let category = acc.find(c => c.name === tx.category);
    if (!category) {
      category = { name: tx.category, value: 0 };
      acc.push(category);
    }
    category.value += tx.amount;
    return acc;
  }, []);

  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label />
      <Tooltip />
    </PieChart>
  );
};

export default ExpenseChart;
