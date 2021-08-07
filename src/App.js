import React, {useState} from 'react';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';
import Nav from './components/Nav';



function App() {
  const [pages] = useState([
    {name: 'about'},
    {name: 'project'},
    {name: 'contact'},
    {name: 'resume'}
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <div>
        <Page currentPage={currentPage}></Page>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
