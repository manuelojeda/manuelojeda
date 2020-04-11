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
                    'image' => 'https://manuelojeda.xyz/img/profile_pic.jpg'
                ],
                'stack' => [
                    [
                        'lang' => 'PHP',
                        'logo' => 'fa-php',
                        'description' => $faker->sentence
                    ],
                    [
                        'lang' => 'Laravel',
                        'logo' => 'fa-laravel',
                        'description' => $faker->sentence
                    ],
                    [
                        'lang' => 'TypeScript',
                        'logo' => 'fa-typescript',
                        'description' => $faker->sentence
                    ],
                    [
                        'lang' => 'Vue',
                        'logo' => 'fa-vue',
                        'description' => $faker->sentence
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
