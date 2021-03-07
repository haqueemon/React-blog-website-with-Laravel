const BaseUrl = 'http://127.0.0.1:8000';
const ApiUrl = {
    BaseUrl,
    AllPost: BaseUrl + '/api/posts',
    GetAllPost: BaseUrl + '/api/allPosts',
    singlePost: BaseUrl + '/api/posts/',
    CatPost: BaseUrl + '/api/cat-posts/',
    TagPost: BaseUrl + '/api/tag-posts/',
    RecentPost: BaseUrl + '/api/posts-recent',
    Categories: BaseUrl+ '/api/categories',
    Tags: BaseUrl+ '/api/tags',
    Login: BaseUrl+ '/api/login',
    Register: BaseUrl+ '/api/register',
    Profile: BaseUrl+ '/api/profile',
    Author: BaseUrl+ '/api/author/',
    AddComment: BaseUrl+ '/api/addComment',
    AddPost: BaseUrl+ '/api/addPost',
    DeleteComment: BaseUrl+ '/api/deleteComment/',
    DeletePost: BaseUrl+ '/api/deletePost/',

}
export default ApiUrl;