<?php
// phpcs:disable
/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Page;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Page::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'content' => collect([
            'description' => $faker->sentence
        ])
    ];
});
