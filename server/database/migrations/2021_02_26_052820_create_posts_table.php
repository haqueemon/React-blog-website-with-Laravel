<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {

            $table->increments('id');

            $table->integer('author_id')->unsigned();
            $table->foreign('author_id')->references('id')->on('authors')->onUpdate('CASCADE')->onDelete('CASCADE');

            $table->integer('cat_id')->unsigned();
            $table->foreign('cat_id')->references('id')->on('categories')->onUpdate('CASCADE')->onDelete('CASCADE');

            $table->string('title');
            $table->string('slug');
            $table->text('tags');
            $table->text('description');
            $table->string('image')->nullable();
            $table->string('publish_date');

            $table->enum('status', ['enable', 'disable'])->default('enable');

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
