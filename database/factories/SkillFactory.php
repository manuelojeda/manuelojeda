<?php
// phpcs:disable
/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Skill;
use Faker\Generator as Faker;

$factory->define(Skill::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->name,
        'amount' => $faker->numberBetween(50, 100),
        'order' => null
    ];
});
