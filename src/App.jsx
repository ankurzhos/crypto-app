import { CryptoContextProvider } from "./context/crypto-context";
import AppLayout from "./components/layout/App.Layout";

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}
