import Post from './Post';

import React, { Component } from 'react';

class HomeAPI extends Component {
    state = {
        list: []
    }

    componentDidMount = async () => {
        await fetch("https://my-json-server.typicode.com/rizalanhari/API_React_UTS/posts")
            .then(response => response.json())
            .then(
                (artikel) => {
                    this.setState({
                        isLoaded: true,
                        list: artikel
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
        // console.log(this.state.list)
        return (
            <div className="post-artikel">
                <div className="row">

                    {
                        this.state.list.map(artikel => {
                            return <Post title={artikel.title} description={artikel.description} gambar={artikel.gambar} />
                        })
                    }
                </div>

            </div>
        )
    }

}

export default HomeAPI;