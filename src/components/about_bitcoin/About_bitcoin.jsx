import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import MyImage1 from '../../assets/img1.png'
import MyImage2 from '../../assets/img2.png'

function About_bitcoin() {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title className="fw-bold">About Bitcoin</Card.Title>
        <Card.Subtitle className="mt-4 fw-bold">What is Bitcoin?</Card.Subtitle>
        <Card.Text>
        Bitcoins price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 MBTC and a max supply of 21 M BTC.
        </Card.Text>
        <Card.Subtitle className="mt-3 pt-3 border-top fw-bold">Lorem ipsum dolor sit amet?</Card.Subtitle>
        <Card.Text className="pb-3 border-bottom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus non necessitatibus aliquam! Atque possimus aut nemo saepe, omnis, quo vel voluptatibus rerum minima vitae, dignissimos laudantium aspernatur! Quia, tempora.
            Et doloribus dolore dolorem, voluptas voluptatibus, impedit sunt, excepturi ipsam quas qui in? Amet unde fugiat doloribus, et odit, vitae facere excepturi fugit id ducimus, pariatur laboriosam. Deserunt, sapiente repellat!
            Nesciunt pariatur, non amet sequi sapiente veritatis, suscipit, adipisci in repellat dicta laboriosam at odio. 
            <br /><br />
            Ratione quam nobis id voluptate nisi eaque iste similique temporibus error? Quae cupiditate amet corrupti.
            Officia reprehenderit dolorem optio eveniet est nisi aut amet nemo neque quaerat quidem possimus, rem voluptates doloribus dicta perspiciatis qui impedit ipsa, facere dolores. Tempora quam odit odio ab veniam.
            Quas ducimus mollitia beatae cumque aperiam maiores eaque quos voluptas quis consequatur, rem ullam vel. Sapiente omnis saepe libero temporibus voluptatibus eos, explicabo vel delectus possimus assumenda suscipit. Explicabo, dolore.
            
            <br /><br />
            Aut, delectus fugit? Officiis, deserunt unde sit necessitatibus repellendus id, reiciendis corrupti voluptatum architecto corporis vero maiores ratione magni asperiores nobis dignissimos nulla provident am.
        </Card.Text>
        <div className="row pb-3">
        <Card.Title className="fw-bold">Already Holding Bitcoin?</Card.Title>
            <div className="col-md-6">
                <Image src={MyImage1} fluid />
            </div>
            <div className="col-md-6">
                <Image src={MyImage2} fluid />
            </div>
        </div>
        <Card.Text className="pt-3 border-top">
            Aut, delectus fugit? Officiis, deserunt unde sit necessitatibus repellendus id, reiciendis corrupti voluptatum architecto corporis vero maiores ratione magni asperiores nobis dignissimos nulla provident am.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About_bitcoin;