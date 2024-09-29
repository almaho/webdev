
import { Route, Routes, Navigate } from "react-router";
import Account from "../Kanbas/Account";


export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <Routes>
      <Route path="/" element={<Navigate to="Account" />} />
      <Route path="/Account/*" element={<Account />} />

      </Routes>
    </div>
  );
}
