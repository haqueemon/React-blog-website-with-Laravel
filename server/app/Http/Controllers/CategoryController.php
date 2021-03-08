<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Post;
use DB;

class CategoryController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return all categories
     */
    public function index()
    {
        $allCategories = Category::orderBy('id', 'desc')->get();
        return response()->json($allCategories);
    }


    /**
     * Create category
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Category
     */
    public function store(Request $request)
    {

        $rules = [
            'name' => 'required||unique:categories|max:255',
        ];
        $this->validate($request, $rules);

        $newData = new Category;
        $newData->name    	= $request->name;
        $newData->slug    	= str_slug($request->name , "-");
        $newData->save();

        return $newData;
    }



    /**
     * Show category
     *
     * @param  $id // Category id
     * @return Category
     */
    public function show($id)
    {
        $category = Category::find($id);
        return response()->json($category);
    }



    /**
     * Update category
     *
     * @param  \Illuminate\Http\Request  $request, $id
     * @return Category
     */
    public function update(Request $request)
    {

        $rules = [
            'name' => 'required|unique:categories,name,' . $request->id,
        ];
        $this->validate($request, $rules);

        $newData = Category::find($request->id);
        $newData->name    	= $request->name;
        $newData->slug    	= str_slug($request->name , "-");
        $newData->save();

        return $newData;
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Category::find($id);
        $data->delete();
    }


    /**
     * Show all posts by category
     *
     * @param  $slug // Category slug
     * @return posts data
     */
    public function postByCategory($slug)
    {
        $catData = Category::where('slug',$slug)->get();
        if(count($catData) > 0){
        	$cat_id = $catData[0]->id;

            $datas = DB::table('posts')
                ->join('categories', 'posts.cat_id', '=', 'categories.id')
                ->join('authors', 'posts.author_id', '=', 'authors.id')
                ->select('posts.*', 'categories.name as cat_name', 'authors.name as aut_name')
                ->orderBy('posts.id', 'desc')
                ->where('posts.status','enable')
                ->where('posts.cat_id',$cat_id)
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

        }else{
        	return response()->json('null');
        }
    }



}
