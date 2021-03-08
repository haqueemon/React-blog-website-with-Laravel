<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Post;
use DB;

class PostController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return all posts
     */
    public function index()
    {
        $datas = DB::table('posts')
            ->join('categories', 'posts.cat_id', '=', 'categories.id')
            ->join('authors', 'posts.author_id', '=', 'authors.id')
            ->select('posts.*', 'categories.name as cat_name', 'authors.name as aut_name')
            ->orderBy('posts.id', 'ASC')
            ->limit(2)
            ->where('posts.status','enable')
            ->get();

        if(count($datas) > 0){
        	foreach ($datas as $data) {
        		$data->comments = DB::table('post_comments')
        		->where('status','enable')
        		->where('post_id',$data->id)
            	->count();
        	}
        	return response()->json($datas);
        }else{
        	return response()->json("NULL");
        }

    }

    /**
     * Display a listing of the resource.
     *
     * @return all posts
     */
    public function getAllBlogs()
    {
        $datas = DB::table('posts')
            ->join('categories', 'posts.cat_id', '=', 'categories.id')
            ->join('authors', 'posts.author_id', '=', 'authors.id')
            ->select('posts.*', 'categories.name as cat_name', 'authors.name as aut_name')
            ->orderBy('posts.id', 'DESC')
            ->where('posts.status','enable')
            ->get();

        if(count($datas) > 0){
            foreach ($datas as $data) {
                $data->comments = DB::table('post_comments')
                ->where('status','enable')
                ->where('post_id',$data->id)
                ->count();
            }
            return response()->json($datas);
        }else{
            return response()->json("NULL");
        }

    }

    /**
     * Display a listing of the resource.
     *
     * @return all search posts
     */
    public function search($searchTerm)
    {
        $datas = DB::table('posts')
            ->join('categories', 'posts.cat_id', '=', 'categories.id')
            ->join('authors', 'posts.author_id', '=', 'authors.id')
            ->select('posts.*', 'categories.name as cat_name', 'authors.name as aut_name')
            ->orderBy('posts.id', 'desc')
            ->where('posts.status','enable')
            ->where('posts.title', 'LIKE', "%{$searchTerm}%") 
   			->orWhere('categories.name', 'LIKE', "%{$searchTerm}%")
            ->limit(2)
            ->get();

        if(count($datas) > 0){
        	foreach ($datas as $data) {
        		$data->comments = DB::table('post_comments')
        		->where('status','enable')
        		->where('post_id',$data->id)
            	->count();
        	}
        	return response()->json($datas);
        }else{
        	return response()->json("NULL");
        }

    }

    /**
     * Display a listing of the resource.
     *
     * @return all search posts
     */
    public function tagSearch($searchTerm)
    {
    	$searchTerm = str_replace('-', ' ', $searchTerm);
        $datas = DB::table('posts')
            ->join('categories', 'posts.cat_id', '=', 'categories.id')
            ->join('authors', 'posts.author_id', '=', 'authors.id')
            ->select('posts.*', 'categories.name as cat_name', 'authors.name as aut_name')
            ->orderBy('posts.id', 'desc')
            ->where('posts.status','enable')
            ->where('posts.tags', 'LIKE', "%{$searchTerm}%")
            ->limit(2)
            ->get();

        if(count($datas) > 0){
        	foreach ($datas as $data) {
        		$data->comments = DB::table('post_comments')
        		->where('status','enable')
        		->where('post_id',$data->id)
            	->count();
        	}
        	return response()->json($datas);
        }else{
        	return response()->json("NULL");
        }

    }

    /**
     * Display a listing of the resource.
     *
     * @return all recent posts
     */
    public function recent()
    {
        $datas = DB::table('posts')
            ->join('categories', 'posts.cat_id', '=', 'categories.id')
            ->join('authors', 'posts.author_id', '=', 'authors.id')
            ->select('posts.id', 'posts.title', 'posts.slug', 'posts.publish_date', 'categories.name as cat_name', 'authors.name as aut_name')
            ->orderBy('posts.id', 'desc')
            ->where('posts.status','enable')
            ->limit(5)
            ->get();

        if(count($datas) > 0){
        	foreach ($datas as $data) {
        		$data->comments = DB::table('post_comments')
        		->where('status','enable')
        		->where('post_id',$data->id)
            	->count();
        	}
        	return response()->json($datas);
        }else{
        	return response()->json("NULL");
        }

    }

    /**
     * Display a listing of the resource.
     *
     * @return all related posts
     */
    public function related($post_id,$cat_id)
    {
        $datas = DB::table('posts')
            ->join('categories', 'posts.cat_id', '=', 'categories.id')
            ->join('authors', 'posts.author_id', '=', 'authors.id')
            ->select('posts.*', 'categories.name as cat_name', 'authors.name as aut_name')
            ->where('posts.status','enable')
            ->where('posts.id', '!=', $post_id)
            ->where('posts.cat_id', $cat_id)
            ->limit(2)
            ->get();

        if(count($datas) > 0){
        	foreach ($datas as $data) {
        		$data->comments = DB::table('post_comments')
        		->where('status','enable')
        		->where('post_id',$data->id)
            	->count();
        	}
        	return response()->json($datas);
        }else{
        	return response()->json("NULL");
        }

    }


    /**
     * Display a single category data
     *
     * @param $slug
     * @return single category data
     */
    public function single($slug)
    {

        $postData = Post::where('slug',$slug)->get();
        if(count($postData) > 0){
        	$post_id = $postData[0]->id;

	        $datas = DB::table('posts')
	            ->join('categories', 'posts.cat_id', '=', 'categories.id')
	            ->join('authors', 'posts.author_id', '=', 'authors.id')
	            ->select('posts.*', 'categories.name as cat_name', 'authors.name as aut_name')
	            ->orderBy('posts.id', 'desc')
	            ->where('posts.status','enable')
	            ->where('posts.id', '=', $post_id)
	            ->get();

		        if(count($datas) > 0){
		        	foreach ($datas as $data) {

		        		$data->all_comments = $cmt = DB::table('post_comments')
	            		->join('authors', 'post_comments.author_id', '=', 'authors.id')
	            		->select('post_comments.*', 'authors.name as aut_name', 'authors.image as aut_image')
		        		->where('post_comments.status','enable')
		        		->where('post_comments.post_id',$data->id)
                        ->orderBy('post_comments.id', 'ASC')
		            	->get();

		        		$data->comments = $cmt->count();
		        	}
		        	return response()->json($datas);
		        }


        }else{
        	return response()->json('null');
        }


    }



    /**
     * Display tags
     *
     * @return Tag data
     */
    public function tags()
    {

        $datas = POST::orderBy('id', 'desc')
            ->where('status','enable')
            ->pluck('tags');
        $allTags = "";
        if(count($datas) > 0){
        	$ct = 0;
        	foreach ($datas as $data) {
        		if($ct==0){
					$allTags.= $data;
        		}else{
        			$allTags.= ','.$data;
        		}
        		$ct++;
        		if($ct==10){
        			break;
        		}
        	}
        	$arrayTags = explode(',', $allTags);
        	$arrUn = array_unique($arrayTags);
        	return response()->json($arrUn);
        }else{
        	return response()->json("NULL");
        }


    }


    public function addPost(Request $request){

        $data = json_decode($request->getContent(),true);

        $title = $data['title'];
        $category = $data['category'];
        $tags = $data['tags'];
        $description = $data['description'];
        $user_id = $data['user_id'];
        $slug = str_slug($data['title']);

        $checkSlug = DB::table('posts')->where('slug', $slug)->first();
        if($checkSlug){
            $returnArray = ['status'=>'error','message'=>'Title already exists !'];
            return response()->json(compact('returnArray'),201);
        }


        $postData = new Post();
        $postData->title = $title;
        $postData->slug = $slug;
        $postData->cat_id = $category;
        $postData->author_id = $user_id;
        $postData->tags = $tags;
        $postData->description = $description;
        $postData->status = 'enable';
        $postData->publish_date = date('Y-m-d H:i:s');
        $postData->created_at = date('Y-m-d H:i:s');

        if($data['image'])
        {

            $image_64 = $data['image']; //your base64 encoded data
            $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf
            $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
            $image = str_replace($replace, '', $image_64); 
            $image = str_replace(' ', '+', $image); 
            $imageName = time().'.'.$extension;
            \Storage::disk('public')->put($imageName, base64_decode($image));
            // $postData->image = $request->getSchemeAndHttpHost().'/storage/app/public/'.$imageName;
            $postData->image = 'http://localhost/server/storage/app/public/'.$imageName;


        }

        if($postData->save()){
            $returnArray = ['status'=>'true','message'=>'Added successfully'];
        }else{
            $returnArray = ['status'=>'error','message'=>'Something is wrong !'];
        }
        return response()->json(compact('returnArray'),201);
        

    }


    public function deletePost($postId,$autId){

        $post = Post::find($postId);

        if($post->delete()){
            $datas = DB::table('posts')
                ->join('categories', 'posts.cat_id', '=', 'categories.id')
                ->join('authors', 'posts.author_id', '=', 'authors.id')
                ->select('posts.*', 'categories.name as cat_name', 'authors.name as aut_name')
                ->orderBy('posts.id', 'desc')
                ->where('posts.status','enable')
                ->where('posts.author_id', '=', $autId)
                ->get();

            if(count($datas) > 0){
                foreach ($datas as $data) {

                    $data->all_comments = $cmt = DB::table('post_comments')
                    ->join('authors', 'post_comments.author_id', '=', 'authors.id')
                    ->select('post_comments.*', 'authors.name as aut_name', 'authors.image as aut_image')
                    ->where('post_comments.status','enable')
                    ->where('post_comments.post_id',$data->id)
                    ->get();

                    $data->comments = $cmt->count();
                }
                return response()->json($datas);
            }else{
                return response()->json('null');
            }
        }else{
            return response()->json('null');
        }

    }



}
