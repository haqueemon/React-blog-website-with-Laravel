<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    public function getPosts()
    {
        return $this->hasMany(\App\Post::class,'author_id');
    }
}
