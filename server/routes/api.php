<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::group(['middleware'=>['cors']],function(){


	// Categories
	Route::get('categories','CategoryController@index');
	Route::get('cat-posts/{slug}','CategoryController@postByCategory');

	Route::post('categories','CategoryController@store');
	Route::post('update-category','CategoryController@update');
	Route::get('categories/{id}','CategoryController@show');
	Route::get('category-destroy/{id}','CategoryController@destroy');

	// Posts
	Route::get('posts-search/{slug}','PostController@search');
	Route::get('tag-posts/{slug}','PostController@tagSearch');
	Route::get('posts','PostController@index');
	Route::get('allPosts','PostController@getAllBlogs');
	Route::get('posts-recent','PostController@recent');
	Route::get('posts-related/{post_id}/{cat_id}','PostController@related');
	Route::get('posts/{slug}','PostController@single');

	// All Tags
	Route::get('tags','PostController@tags');


	// Customer panel
	Route::post('register','AuthorController@register');
	Route::post('login','AuthorController@login');
	Route::post('profile','AuthorController@getAuthenticatedUser');
	Route::get('author/{id}','AuthorController@authorPost');
	Route::post('addComment','AuthorController@addComment');

	Route::post('addPost','PostController@addPost');
	Route::get('deletePost/{id}/{autId}','PostController@deletePost');


});



// Route::group(['middleware'=>['cors','jwt.auth']],function(){

// 	Route::post('profile','AuthorController@getAuthenticatedUser');

// });