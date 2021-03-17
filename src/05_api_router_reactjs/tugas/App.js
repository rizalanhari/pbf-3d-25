import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Card,
    Container,
    Col,
    Row,
    Jumbotron
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
function Beranda() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>API dan React Router di ReactJS</h1>
                <p>
                    Pada codelab ini Anda akan mempelajari tentang pengambilan data melalui API (Application Programming Interface) dan membuat navigasi untuk berpindah halaman menggunakan React Router.
                </p>
            </Container>
        </Jumbotron>
    );
}

function Tentang() {
    return (
        <Container>
            <br></br>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                </Col>
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Tentang</Card.Title>
                            <Card.Text>
                                NIM: 1841720218
                    <br></br>
                    Nama: Rizal Anhari
                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs lg="2">
                </Col>
            </Row>
        </Container>


    );
}

function Berita(props) {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.judul}</Card.Title>
                    <Card.Text>
                        {props.isiArtikel}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}
function Topik() {
    let { topicId } = useParams();
    return <h3>Topik yang terpilih: {topicId}</h3>;
}

function Codelabs() {
    let match = useRouteMatch();

    return (
        <Jumbotron fluid>
            <Container>
                <h1>API dan React Router di ReactJS</h1>
                <p>
                    <Switch>
                        <Route path={`${match.path}/:topicId`}>
                            <Topik />
                        </Route>
                        <Route path={match.path}>
                            <h3>Silakan Pilih Topik Codelab yang tersedia.</h3>
                        </Route>
                    </Switch>
                </p>
            </Container>
        </Jumbotron>
    );
}

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,         // jika terjadi gagal ambil data dari API
            isLoaded: false,     // untuk status ketika sedang memuat
            dataArtikel: []      // untuk menampung data API
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(
                (dataJson) => {
                    this.setState({
                        isLoaded: true,
                        dataArtikel: dataJson
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
    }
    render() {
        const { error, isLoaded, dataArtikel } = this.state;

        if (error) {
            return <div>Terjadi galat: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Sedang memuat...</div>;
        } else {
            return (
                <Container>
                    <br></br>
                    <h2>Daftar Artikel</h2>
                    <Row className="justify-content-md-center">
                        {
                            dataArtikel.map(artikel => {
                                return <Berita judul={artikel.title} isiArtikel={artikel.body} />
                            })
                        }
                    </Row>
                </Container>
            );
        }
    }
}
export default function App() {
    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">API dan React Router di ReactJS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Beranda</Nav.Link>
                            <Nav.Link href="/berita">Berita</Nav.Link>
                            <Nav.Link href="/tentang">Tentang</Nav.Link>
                            <NavDropdown title="CodeLabs" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/codelabs/konsep-reactjs">Konsep ReactJS</NavDropdown.Item>
                                <NavDropdown.Item href="/codelabs/belajar-react-router">Belajar React Router</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route path="/konsep-reactjs">
                        <Blog />
                    </Route>
                    <Route path="/berita">
                        <Blog />
                    </Route>
                    <Route path="/tentang">
                        <Tentang />
                    </Route>
                    <Route path="/codelabs">
                        <Codelabs />
                    </Route>
                    <Route path="/">
                        <Beranda />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}