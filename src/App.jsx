import { Layout } from "antd";
import AppHeader from "./components/layout/App.Header";
import AppSider from "./components/layout/App.Sider";
import AppContent from "./components/layout/App.Content";

export default function App() {
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
