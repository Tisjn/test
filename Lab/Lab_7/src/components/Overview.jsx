import { useEffect, useState } from "react";
import { ShoppingCart, DollarSign, UserPlus } from "lucide-react";

export default function Overview() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://67f540fc913986b16fa3e59e.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  const newCustomerCount = customers.length;
  const turnover = 92405;
  const profit = 32218;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Turnover */}
      <div className="bg-pink-50 border border-pink-200 rounded-xl p-5 flex justify-between items-start shadow-sm">
        <div>
          <p className="text-gray-600 font-semibold">Turnover</p>
          <h2 className="text-2xl font-bold mt-1">${turnover.toLocaleString()}</h2>
          <p className="text-green-500 text-sm mt-1">▲ 5.39% period of change</p>
        </div>
        <div className="bg-pink-100 p-2 rounded-lg">
          <ShoppingCart className="text-pink-600" />
        </div>
      </div>

      {/* Profit */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex justify-between items-start shadow-sm">
        <div>
          <p className="text-gray-600 font-semibold">Profit</p>
          <h2 className="text-2xl font-bold mt-1">${profit.toLocaleString()}</h2>
          <p className="text-green-500 text-sm mt-1">▲ 5.39% period of change</p>
        </div>
        <div className="bg-blue-100 p-2 rounded-lg">
          <DollarSign className="text-blue-600" />
        </div>
      </div>

      {/* New Customer */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex justify-between items-start shadow-sm">
        <div>
          <p className="text-gray-600 font-semibold">New customer</p>
          <h2 className="text-2xl font-bold mt-1">{newCustomerCount}</h2>
          <p className="text-green-500 text-sm mt-1">▲ 6.84% period of change</p>
        </div>
        <div className="bg-blue-100 p-2 rounded-lg">
          <UserPlus className="text-blue-600" />
        </div>
      </div>
    </div>
  );
}
