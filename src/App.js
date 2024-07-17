import './App.css';
import { Layout } from 'antd';
import HeaderLayout from "./Components/Header"
import MainContent from "./Components/MainContent"
import FooterLayout from "./Components/FooterLayout"
import QrContextProvider from './Context/qrContextProvider';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <QrContextProvider>
      <Layout className='bg-white'>
        <Header className='app-header'>
          <HeaderLayout />
        </Header>
          <Content className='bg-white'>
            <MainContent />
          </Content>
        <Footer>
          <FooterLayout />
        </Footer>
    </Layout>
    </QrContextProvider>
  );
}

export default App;
