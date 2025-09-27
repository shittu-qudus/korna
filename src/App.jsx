import './App.css';
import Header from './Header/Header';
import ArticleCard from './ArticleCard/ArticleCard';
import Sidebar from './Sidebar/Sidebar';
import { articles, staffs, topics, follows } from '../data';
function App() {
  return (
    <>
      <Header />
      
      <main className='maincontainer'>
        <div className="navigation">
          <span className="nav-active">For you</span>
          <span>Featured</span>
        </div>

        <div className='content-wrapper'>
          <div className="main-content">
            <div className="articles-section">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Mobile Sidebar */}
            <Sidebar 
              staffs={staffs} 
              topics={topics} 
              follows={follows} 
              isMobile={true} 
            />
          </div>

          {/* Desktop Sidebar */}
          <Sidebar 
            staffs={staffs} 
            topics={topics} 
            follows={follows} 
            isMobile={false} 
          />
        </div>
      </main>
    </>
  );
}

export default App;