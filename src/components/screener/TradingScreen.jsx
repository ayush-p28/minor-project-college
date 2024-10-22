import Card from 'react-bootstrap/Card';
import Screen from "./Screen";

function Charts() {
  return (
    <div>
        <Card className="p-2">
        <Card.Title className="fw-bolder fs-4">Crypto Coins Screener</Card.Title>
          <Screen/>
      </Card>
    </div>
  );
}

export default Charts;