import React from 'react';
import API from '../services/Comment';
import { Button } from 'react-bootstrap';

function DaftarComment(props) {
    return (
        <div>
            <h3>{props.judul}</h3>
            <div>{props.isiComment}</div>
        </div>
    );
}

export default class CommentPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataComment: [],    // untuk menampung data API
            postComment: {
                userId: 1,
                nama: '',
                komentar: ''
            }
        };
    }

    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                dataComment: result
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleTombolSimpan = (e) => {
        e.preventDefault();

        API.postNewsBlog(this.state.postComment)
            .then((response) => {
                this.ambilDataDariServerAPI();    // refresh data
                alert('Data berhasil disimpan!');
            });
    }

    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            prevState.postComment[name] = value;
            return {
                postComment: prevState.postComment
            };
        });
    }

    handleTombolHapus = (e) => {
        e.preventDefault();

        API.deleteNewsBlog(e.target.value)
            .then((response) => {
                this.ambilDataDariServerAPI();    // refresh data
                alert('Data berhasil dihapus!');
            });
    }

    render() {
        const { dataComment, postComment } = this.state;

        return (
            <div>
                <div>
                    <form onSubmit={this.handleTombolSimpan}>
                        <label>
                            Judul Comment:
              <input type="text" name="nama" defaultValue={postComment.nama} onChange={this.handleOnChange} />
                        </label>
                        <label>
                            Isi Comment:
              <input type="text" name="komentar" defaultValue={postComment.komentar} onChange={this.handleOnChange} />
                        </label>
                        <input type="submit" value="Simpan" />
                    </form>
                </div>
                <hr></hr>
                <h2>Daftar Comment</h2>
                {
                    dataComment.map(comment => {
                        return (
                            <div key={comment.id}>
                                <DaftarComment judul={comment.nama} isiComment={comment.komentar} />
                                <Button variant="danger" value={comment.id} onClick={this.handleTombolHapus}>Hapus</Button>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}