<?php

use Illuminate\Database\Seeder;
use App\Post;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $data = [
            [
                'author_id' => '1',
                'cat_id' => '1',
                'title' => 'Importance of dress code in life',
                'slug' => 'importance-of-dress-code-in-life',
                'tags' => 'Life,New Life,Rich Life',
                'description' => 'Nullam at quam ut lacus aliquam tempor vel sed ipsum. Donec pellentesque tincidunt imperdiet. Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra leo. Phasellus interdum, diam commodo egestas rhoncus, turpis nisi consectetur nibh, in vehicula eros orci vel neque.',
                'image' => 'https://templatemo.com/templates/templatemo_551_stand_blog/assets/images/blog-post-01.jpg',
                'publish_date' => date('Y-m-d H:i:s'),
                'status' => 'enable',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                'author_id' => '1',
                'cat_id' => '4',
                'title' => 'Guide To Design Database',
                'slug' => 'guide-to-design-database',
                'tags' => 'Web,Design,React,Laravel,API',
                'description' => 'This tutorial provides complete steps to design a database schema to manage the users, blog posts, post meta data, post comments, post categories, and post tags. It can be further used to develop a blogging website or mobile application.',
                'image' => 'https://templatemo.com/templates/templatemo_551_stand_blog/assets/images/blog-post-03.jpg',
                'publish_date' => date('Y-m-d H:i:s'),
                'status' => 'enable',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                'author_id' => '1',
                'cat_id' => '4',
                'title' => 'Why React Is Important ?',
                'slug' => 'why-react-is-important',
                'tags' => 'React,ReactJS',
                'description' => 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
                'image' => 'https://templatemo.com/templates/templatemo_551_stand_blog/assets/images/blog-post-02.jpg',
                'publish_date' => date('Y-m-d H:i:s'),
                'status' => 'enable',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
        ];

        Post::insert($data);
        
    }

}