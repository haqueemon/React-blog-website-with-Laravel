<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use DB;

class AuthorController extends Controller
{
    public function register(Request $request){

        $postedData = json_decode($request->getContent(),true);

        $name = $postedData['name'];
        $email = $postedData['email'];
        $password = $postedData['password'];

        $checkEmail = DB::table('authors')->where('email', $email)->first();
        if($checkEmail){
            $returnArray = ['status'=>'error','message'=>'Email already exists !'];
            return response()->json(compact('returnArray'),201);
        }

        $id = DB::table('authors')->insertGetId(
            [
                'name' => $name,
                'email' => $email,
                'password' => Hash::make($password),
                'created_at' => date('Y-m-d H:i:s'),
            ]
        );

        if($id){
            $returnArray = ['status'=>'true','message'=>'Register successfully'];
        }else{
            $returnArray = ['status'=>'error','message'=>'Something is wrong !'];
        }
        return response()->json(compact('returnArray'),201);
        

    }

    public function login(Request $request){

        $credentials = json_decode($request->getContent(),true);

        $email = $credentials['email'];
        $password = $credentials['password'];

        $user = DB::table('authors')->where('email', $email)->first();
        if($user){
            if(Hash::check($password, $user->password)) {
                return response()->json(['status'=>'true','users'=>$user,'user_id'=>$user->id,'userlogin'=>'true']);
            } else {
                return response()->json(['status'=>'false', 'message'=>'Invalid Password !']);
            }
        }else{
            return response()->json(['status'=>'false', 'message'=>'Credentials not found !']);
        }

    }

    public function getAuthenticatedUser(Request $request){

        $info = json_decode($request->getContent(),true);

        $user_id = $info['user_id'];

        $user = DB::table('authors')->where('id', $user_id)->first();
        if($user){
            return response()->json(compact('user'));
        }
        return response()->json(compact('user'));


    }

    public function authorPost($autId){

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

    }

    public function addComment(Request $request){

        $postedData = json_decode($request->getContent(),true);

        $message = $postedData['message'];
        $post_id = $postedData['post_id'];
        $user_id = $postedData['user_id'];


        $id = DB::table('post_comments')->insertGetId(
            [
                'comment_text' => $message,
                'post_id' => $post_id,
                'author_id' => $user_id,
                'author_id' => $user_id,
                'publish_date' => date('Y-m-d H:i:s'),
                'status' => 'enable',
            ]
        );

        if($id){

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
            $returnArray = ['status'=>'error','message'=>'Something is wrong !'];
        	return response()->json(compact('returnArray'),201);
        }
        

    }

}
