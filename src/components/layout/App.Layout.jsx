import { Layout, Spin } from "antd";
import AppHeader from "./App.Header";
import AppSider from "./App.Sider";
import AppContent from "./App.Content";
import { useContext } from "react";
import CryptoContext from "../../context/crypto-context";

export default function AppLayout() {
  const { loading } = useContext(CryptoContext);

  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
