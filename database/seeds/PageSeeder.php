<?php
// phpcs:disable
use App\Page;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        Page::truncate();
        Page::create([
            'title' => 'Home',
            'slug' => null,
            'content' => collect([
                'personal' => [
                    'name' => 'Manuel Ojeda',
                    'job' => 'Full Stack Dev',
                    'mail' => 'manuelojedasistemas@gmail.com',
                    'image' => '/img/profile-pic.png'
                ],
                'stack' => [
                    [
                        'lang' => 'PHP',
                        'logo' => 'php',
                        'description' => $faker->sentence,
                        'color' => '#4f5b93',
                    ],
                    [
                        'lang' => 'Laravel',
                        'logo' => 'laravel',
                        'description' => $faker->sentence,
                        'color' => '#F05340',
                    ],
                    [
                        'lang' => 'JavaScript',
                        'logo' => 'js',
                        'description' => $faker->sentence,
                        'color' => '#F0DB4F',
                    ],
                    [
                        'lang' => 'Vue',
                        'logo' => 'vuejs',
                        'description' => $faker->sentence,
                        'color' => '#42B883',
                    ],
                ],
                'mission' => $faker->text,
                'vision' => $faker->text,
            ])
        ]);
        Page::create([
            'title' => 'Portfolio',
            'content' => collect([
                'description' => $faker->sentence
            ])
        ]);
    }
}
