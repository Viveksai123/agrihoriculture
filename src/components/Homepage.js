import { useNavigate } from 'react-router-dom';
import l1 from './img/li.jpg';
import './styles.css';

// Define translations for the Homepage component
const translations = {
  EN: {
    title: 'Homepage',
    analyzePrices: 'Analyze Prices',
    analyzeSoilReport: 'Analyze Soil Report',
    analyzeFields: 'Analyze Fields'
  },
  // Other languages omitted for brevity...
};

const Homepage = ({ activeLanguage }) => {
  const navigate = useNavigate();

  // Get the current translations based on the active language
  const t = translations[activeLanguage] || translations['EN']; // Default to English if activeLanguage is not found

  // Hardcoded news articles related to Indian agriculture, economy, and production
  const newsArticles = [
    {
      title: 'India’s Agricultural Exports Surge in 2024',
      description: 'India sees a major boost in agricultural exports, driven by rice and wheat production.',
      image: 'https://example.com/indianagriculture.jpg',
      url: 'https://example.com/news1'
    },
    {
      title: 'Monsoon Delays Impact Kharif Crop Planting',
      description: 'Delayed monsoon rains have affected the planting of key Kharif crops across major states.',
      image: 'https://example.com/monsoon.jpg',
      url: 'https://example.com/news2'
    },
    {
      title: 'Government Announces New MSP Rates for 2024',
      description: 'The Indian government has raised the minimum support price (MSP) for various crops to support farmers.',
      image: 'https://example.com/msp.jpg',
      url: 'https://example.com/news3'
    },
    {
      title: 'Farmers in Punjab Protest New Agricultural Laws',
      description: 'Farmers across Punjab and Haryana continue to protest against the newly introduced agricultural reforms.',
      image: 'https://example.com/protest.jpg',
      url: 'https://example.com/news4'
    },
    {
      title: 'Organic Farming Grows in Southern India',
      description: 'States like Kerala and Karnataka are seeing a rise in organic farming practices to meet growing demand.',
      image: 'https://example.com/organic.jpg',
      url: 'https://example.com/news5'
    },
    {
      title: 'Pesticide Ban Sparks Debate Among Indian Farmers',
      description: 'The government’s move to ban certain harmful pesticides has sparked a debate among the farming community.',
      image: 'https://example.com/pesticides.jpg',
      url: 'https://example.com/news6'
    }
  ];

  return (
    <div className="home" style={{  fontFamily: "playfair display" }}>
      <div className="container" style={{ marginTop: "15vh" }}>
        <div className="d-flex justify-content-center gap-3">
          <div >  
          
            <button
              className="btn btn-primary"
              onClick={() => navigate('/prices')}
            >
              {t.analyzePrices}
            </button>
          </div>
          <div>
            <button
              className="btn btn-secondary"
              onClick={() => navigate('/soilreport')}
            >
              {t.analyzeSoilReport}
            </button>
          </div>
          <div>
            <button
              className="btn btn-info"
              onClick={() => navigate('/production')}
            >
              {t.analyzeFields}
            </button>
          </div>
        </div>

        {/* News Section */}
        <div className="news-section mt-5">
          <h2 className="text-center mb-4">Latest News in Indian Agriculture</h2>
          <div className="row">
            {newsArticles.map((article, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <img src={article.image} className="card-img-top" alt={article.title} />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
