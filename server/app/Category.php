<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function getPosts()
    {
        return $this->hasMany(\App\Post::class,'cat_id');
    }
}
