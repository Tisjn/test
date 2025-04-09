import Header from "../components/Header";
import Overview from "../components/Overview";
import CustomerTable from "../components/CustomerTable";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <Header />
      <Overview />
      <CustomerTable />
    </div>
  );
}
