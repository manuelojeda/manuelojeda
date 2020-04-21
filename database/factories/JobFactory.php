<?php
// phpcs:disable
/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Job;
use Carbon\Carbon;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Http;

$factory->define(Job::class, function (Faker $faker) {
    $event = $faker->dateTimeBetween($startDate = '-2 years', $endDate = 'now');
    $thumbnail = collect(Http::get('https://jsonplaceholder.typicode.com/photos?_limit=1')->json())->first();
    // dd($thumbnail);

    return [
        'title' => $faker->sentence,
        'content' => collect([
            'date' => Carbon::parse($event)->format('Y-m-d'),
            'description' => $faker->paragraph
        ]),
        'thumbnail' => str_replace('/150/', '/800/', $thumbnail['thumbnailUrl']),
    ];
});
