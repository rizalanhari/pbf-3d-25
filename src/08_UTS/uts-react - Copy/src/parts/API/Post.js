import React from "react";

const Post = (props) => {
    console.log(props.gambar)
    return (
        <article class="col-lg-6 tm-media">
            <img src={props.gambar} alt="Welcome image" class="img-fluid tm-media-img" />
            <div class="tm-media-body">
                <a href="#" class="tm-article-link"><h3 class="tm-article-title text-uppercase">{props.title}</h3></a>
                <p>{props.description}.</p>
            </div>
        </article>
    )
}

export default Post;