<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    public function getCategory(){
        return $this->belongsTo(\App\Category::class, 'cat_id', 'id');
    }

    public function getAuthor(){
        return $this->belongsTo(\App\Author::class, 'author_id', 'id');
    }

    public function getTags(){
        return $this->belongsToMany(\App\Tag::class, 'post_tags');
    }

    public function comments()
    {
        // return $this->hasMany(\App\Comment::class);
        return $this->hasMany(\App\Comment::class,'post_id');
    }

}
