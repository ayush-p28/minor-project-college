import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Toke from '../../assets/toke.png'
import TokeMd from '../../assets/toke_md.png'

function Tokenomics() {

    return (
        <>
            <Card className="p-3 my-3">
                <Card.Title className="fw-bold">Tokenomics</Card.Title>
                <Image className="mt-3 d-none d-md-block" src={Toke} fluid />
                <Image className="mt-3 d-block d-md-none" src={TokeMd} fluid />
                <Card.Body className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, molestiae. Ratione sint, ab unde obcaecati deserunt suscipit laudantium perspiciatis ipsa nostrum voluptas aliquid blanditiis ipsum fuga. Veritatis, consequuntur voluptatibus. Voluptatem.
                Doloribus illo pariatur et facere quidem quos unde, recusandae iure mollitia. Dignissimos harum blanditiis, consectetur est delectus enim, alias suscipit aliquam sed dicta facere quo asperiores quisquam temporibus qui odit!</Card.Body>
            </Card>
        </>
    )
}

export default Tokenomics;