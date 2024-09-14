import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Import the custom CSS file

const translations = {
  english: {
    title: 'Prices Prediction Model',
    yearLabel: 'Year',
    cropLabel: 'Crop',
    yieldLabel: 'Yield (int)',
    submitButton: 'Predict Price',
    predictedPrice: 'Predicted Price',
    selectYear: 'Select Year',
    selectCrop: 'Select Crop',
    yieldPlaceholder: 'Enter yield',
    crops: [
      'bajra', 'castor seed', 'chilli', 'cotton', 'gram', 'groundnut',
      'jowar', 'maize', 'rice', 'ragi', 'sesamum', 'soyabean',
      'sunflower', 'tobacco', 'turmeric'
    ],
  },
  telugu: {
    title: 'ధరలు అంచనా మోడల్',
    yearLabel: 'సంవత్సరం',
    cropLabel: 'పంట',
    yieldLabel: 'ఉత్పత్తి (int)',
    submitButton: 'ధర అంచనా',
    predictedPrice: 'అంచనా ధర',
    selectYear: 'సంవత్సరం ఎంచుకోండి',
    selectCrop: 'పంట ఎంచుకోండి',
    yieldPlaceholder: 'ఉత్పత్తి నమోదు చేయండి',
    crops: [
      'సజ్జ', 'ఆవాలు', 'మిరప', 'పత్తి', 'సెనగ', 'వేరుశెనగ',
      'జొన్నలు', 'మొక్కజొన్న', 'బియ్యం', 'రాగి', 'నువ్వులు', 'సోయాబీన్',
      'సూర్యఫూలు', 'పొగాకు', 'పసుపు'
    ]
  },
  hindi: {
    title: 'मूल्य पूर्वानुमान मॉडल',
    yearLabel: 'साल',
    cropLabel: 'फसल',
    yieldLabel: 'उत्पादन (int)',
    submitButton: 'मूल्य का अनुमान लगाएं',
    predictedPrice: 'अनुमानित मूल्य',
    selectYear: 'वर्ष का चयन करें',
    selectCrop: 'फसल का चयन करें',
    yieldPlaceholder: 'उत्पादन दर्ज करें',
    crops: [
      'बाजरा', 'अरंडी का बीज', 'मिर्च', 'कपास', 'चना', 'मूंगफली',
      'ज्वार', 'मक्का', 'चावल', 'रागी', 'तिल', 'सोयाबीन',
      'सूरजमुखी', 'तंबाकू', 'हल्दी'
    ]
  },
  tamil: {
    title: 'விலை கணிப்பு மாதிரி',
    yearLabel: 'ஆண்டு',
    cropLabel: 'பயிர்',
    yieldLabel: 'விளைச்சல் (int)',
    submitButton: 'விலை கணிப்பு',
    predictedPrice: 'கணிக்கப்பட்ட விலை',
    selectYear: 'ஆண்டைத் தேர்வுசெய்க',
    selectCrop: 'பயிரைத் தேர்வுசெய்க',
    yieldPlaceholder: 'விளைச்சலை உள்ளிடவும்',
    crops: [
      'கம்பு', 'ஆமணக்கு விதை', 'மிளகாய்', 'பருத்தி', 'கொண்டைக்கடலை', 'நிலக்கடலை',
      'சோளம்', 'மக்காச்சோளம்', 'அரிசி', 'கேழ்வரகு', 'எள்', 'சோயா',
      'சூரியகாந்தி', 'புகையிலை', 'மஞ்சள்'
    ]
  },
  kannada: {
    title: 'ಬೆಲೆ ಅಂದಾಜು ಮಾದರಿ',
    yearLabel: 'ವರ್ಷ',
    cropLabel: 'ಬೆಳೆ',
    yieldLabel: 'ಉತ್ಪಾದನೆ (int)',
    submitButton: 'ಬೆಲೆ ಊಹಿಸು',
    predictedPrice: 'ಅಂದಾಜು ಬೆಲೆ',
    selectYear: 'ವರ್ಷ ಆಯ್ಕೆಮಾಡಿ',
    selectCrop: 'ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ',
    yieldPlaceholder: 'ಉತ್ಪಾದನೆ ನಮೂದಿಸಿ',
    crops: [
      'ನವಣೆ', 'ಹೆಚ್ಚಿನ ಬೀಜ', 'ಮೆಣಸು', 'ಹತ್ತಿ', 'ಹುರಳಿ', 'ಕಡಲೆಕಾಯಿ',
      'ಜೋಳ', 'ಮಕ್ಕಿ', 'ಅಕ್ಕಿ', 'ರಾಗಿ', 'ಎಳ್ಳು', 'ಸೊಯಾ',
      'ಸೂರ್ಯಕಾಂತಿ', 'ಹೊಗೆಪತ್ತೆ', 'ಅರಿಶಿನ'
    ]
  },
  marathi: {
    title: 'किंमत अंदाज मॉडेल',
    yearLabel: 'वर्ष',
    cropLabel: 'पिक',
    yieldLabel: 'उत्पन्न (int)',
    submitButton: 'किंमत भाकीत करा',
    predictedPrice: 'अंदाज केलेली किंमत',
    selectYear: 'वर्ष निवडा',
    selectCrop: 'पिक निवडा',
    yieldPlaceholder: 'उत्पन्न प्रविष्ट करा',
    crops: [
      'बाजरी', 'एरंडी बियाणे', 'मिरची', 'कापूस', 'हरभरा', 'शेंगदाणा',
      'ज्वारी', 'मका', 'तांदूळ', 'नाचणी', 'तीळ', 'सोयाबीन',
      'सूर्यफूल', 'तंबाखू', 'हळद'
    ]
  },
  bengali: {
    title: 'মূল্য ভবিষ্যদ্বাণী মডেল',
    yearLabel: 'বছর',
    cropLabel: 'ফসল',
    yieldLabel: 'ফলন (int)',
    submitButton: 'মূল্য ভবিষ্যদ্বাণী করুন',
    predictedPrice: 'ভবিষ্যদ্বাণীকৃত মূল্য',
    selectYear: 'বছর নির্বাচন করুন',
    selectCrop: 'ফসল নির্বাচন করুন',
    yieldPlaceholder: 'ফলন প্রবেশ করুন',
    crops: [
      'বাজরা', 'ভেষজ বীজ', 'লঙ্কা', 'তুলা', 'ছোলা', 'বাদাম',
      'জোয়ার', 'ভুট্টা', 'চাল', 'রাগি', 'তিল', 'সয়াবিন',
      'সূর্যমুখী', 'তামাক', 'হলুদ'
    ]
  }
};

const Prices = () => {
  const [year, setYear] = useState('');
  const [crop, setCrop] = useState('');
  const [yieldAmount, setYieldAmount] = useState('');
  const [price, setPrice] = useState(null);
  const [language, setLanguage] = useState('english');

  const years = [2024, 2023, 2022, 2021, 2020];

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedPrice = (parseInt(year) + yieldAmount.length * 100) % 1000;
    setPrice(calculatedPrice);
  };

  const generateFuturePrices = () => {
    const prices = [];
    for (let i = 1; i <= 3; i++) {
      prices.push(Math.floor(Math.random() * 1000) + 500); // Random future prices between 500 and 1500
    }
    return prices;
  };

  const t = translations[language];

  return (
    <div className="container " style={{marginTop:"15vh"}}>
      <h2 className="text-center mb-4">{t.title}</h2>
      
      {/* Language Selection */}
      <div className="form-group">
        <label htmlFor="languageSelect">Language</label>
        <select
          id="languageSelect"
          className="form-control"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="english">English</option>
          <option value="telugu">Telugu</option>
          <option value="hindi">Hindi</option>
          <option value="tamil">Tamil</option>
          <option value="kannada">Kannada</option>
          <option value="marathi">Marathi</option>
          <option value="bengali">Bengali</option>
        </select>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="yearSelect">{t.yearLabel}</label>
            <select
              id="yearSelect"
              className="form-control"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            >
              <option value="">{t.selectYear}</option>
              {years.map((yr) => (
                <option key={yr} value={yr}>{yr}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="cropSelect">{t.cropLabel}</label>
            <select
              id="cropSelect"
              className="form-control"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              required
            >
              <option value="">{t.selectCrop}</option>
              {t.crops.map((crop, index) => (
                <option key={index} value={crop}>{crop}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="yieldInput">{t.yieldLabel}</label>
            <input
              id="yieldInput"
              type="number"
              className="form-control"
              value={yieldAmount}
              onChange={(e) => setYieldAmount(e.target.value)}
              required
              min="0"
              placeholder={t.yieldPlaceholder}
            />
          </div>

          <button type="submit" className="btn btn-primary">{t.submitButton}</button>
        </form>
      </div>

      {/* Display the price if calculated */}
      {price !== null && (
        <div className="mt-4">
          <h3>{t.predictedPrice}: {price} units</h3>
          <div className="mt-2">
            <h4>Future Price Estimates:</h4>
            <div className="d-flex flex-wrap">
              {generateFuturePrices().map((futurePrice, index) => (
                <div key={index} className="card p-2 m-1" style={{ width: '150px' }}>
                  <div className="card-body">
                    <h5 className="card-title">Month {index + 1}</h5>
                    <p className="card-text">{futurePrice} units</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prices;
