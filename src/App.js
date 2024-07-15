import './App.css';
import { Layout, Divider } from 'antd';
import HeaderLayout from "./Components/Header"
import MainContent from "./Components/MainContent"

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <>
    <Layout className='bg-white'>
      <Header className='app-header'>
        <HeaderLayout />
      </Header>
        <Content className='bg-white'>
          <MainContent />
        </Content>
    <Footer>footer</Footer>
  </Layout>
    </>
  );
}

export default App;
