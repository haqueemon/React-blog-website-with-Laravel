<?php

use Illuminate\Database\Seeder;
use App\Author;

class AuthorTableSeeder extends Seeder
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
                'name' => 'Author',
                'email' => 'author@gmail.com',
                'phone' => '+880174150145',
                'password' => '$2y$10$TUfePGXn0NmRjk/UAR./.OqEEpWR0cqzzTg6fhmsA4JDeKAo1td1C', //123456
                'image' => 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'address' => 'Temukhi, Sylhet',
                'status' => 'enable',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
        ];

        Author::insert($data);
    }
}
