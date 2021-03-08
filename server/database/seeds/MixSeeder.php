<?php

use Illuminate\Database\Seeder;

class MixSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // Insert default data in post_comments tagle
        $postCommentData = [
            [
                'author_id' => 1,
                'post_id' => 1,
                'comment_text' => 'Post comment 1 for 1',
                'publish_date' => date('Y-m-d H:i:s'),
                'status' => 'enable',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                'author_id' => 1,
                'post_id' => 2,
                'comment_text' => 'Post comment 1 for 2',
                'publish_date' => date('Y-m-d H:i:s'),
                'status' => 'enable',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                'author_id' => 1,
                'post_id' => 1,
                'comment_text' => 'Post comment 2 for 1',
                'publish_date' => date('Y-m-d H:i:s'),
                'status' => 'enable',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
        ];
        DB::table('post_comments')->insert($postCommentData);


    }
}
