import "./App.css";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import News from "./Components/News/News";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-08-30&sortBy=publishedAt&apiKey=3e009871402944099ad84a59d06b0f2f"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="App">
      {news.length === 0 ? (
        <Spinner animation="border" />
      ) : (
        <Row xs={1} md={3} className="g-4">
          {news.map((nw) => (
            <News news={nw}></News>
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;
