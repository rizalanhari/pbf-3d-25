import GetAPI from '../API/Get';
import PostAPI from '../API/Post';
import DeleteAPI from '../API/Delete';

const getNewsBlog = () => GetAPI('comment?_sort=id&_order=desc');
const postNewsBlog = (dataYgDikirim) => PostAPI('comment', dataYgDikirim);
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('comment', dataYgDihapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;

