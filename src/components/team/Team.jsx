import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Team1 from '../../assets/team1.png'
import Team2 from '../../assets/team2.png'
import Team3 from '../../assets/team3.png'

import './Team.css'

function Team() {
    return (
        <Card className="p-3 my-3">
            <Card.Title className="fw-bold">Team</Card.Title>
            <Card.Body>
                <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis aliquid quisquam labore et ab eos repellat omnis voluptate facere placeat.
                </Card.Text>
                <div className="row bg-team py-2 my-3">
                    <div className="col-md-2 text-center align-center parentContainer">
                        <Image className="TeamImages" src={Team1} fluid />
                        <p className="fw-bold m-0">Ayush Patel</p>
                        <p className="fw-bold text-secondary mb-0">FullStack Developer</p>
                    </div>
                    <div className="col-md-9 my-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga quidem tempo ribus laboriosam eius voluptatem earum unde iure dolorem voluptatibus. Inventore, distinctio tempo ribus? Quas tempore voluptatum dicta debitis reiciendis ex!
                        Vero facii totam laborum ducimus eum sunt id, excepturi suscipit fuga maiores, tenetur ullam?
                    </div>
                </div>
                <div className="row bg-team py-2 my-3">
                    <div className="col-md-2 text-center align-center parentContainer">
                        <Image className="TeamImages" src={Team2} fluid />
                        <p className="fw-bold m-0">Harsh Kori</p>
                        <p className="fw-bold text-secondary mb-0">Frontend Developer</p>
                    </div>
                    <div className="col-md-9 my-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga quidem tempo ribus laboriosam eius voluptatem earum unde iure dolorem voluptatibus. Inventore, distinctio tempo ribus? Quas tempore voluptatum dicta debitis reiciendis ex!
                        Vero facii totam laborum ducimus eum sunt id, excepturi suscipit fuga maiores, tenetur ullam?
                    </div>
                </div>
                <div className="row bg-team py-2 my-3">
                    <div className="col-md-2 text-center align-center parentContainer">
                        <Image className="TeamImages" src={Team3} fluid />
                        <p className="fw-bold m-0">Ashwin Satish</p>
                        <p className="fw-bold text-secondary mb-0">Android Developer</p>
                    </div>
                    <div className="col-md-9 my-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga quidem tempo ribus laboriosam eius voluptatem earum unde iure dolorem voluptatibus. Inventore, distinctio tempo ribus? Quas tempore voluptatum dicta debitis reiciendis ex!
                        Vero facii totam laborum ducimus eum sunt id, excepturi suscipit fuga maiores, tenetur ullam?
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Team;