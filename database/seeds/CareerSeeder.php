<?php
// phpcs:disable
use App\Career;
use Illuminate\Database\Seeder;

class CareerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Career::truncate();
        $api_url = "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@".config('app.platzi_username');
        $careers = collect(
            Http::get($api_url)->json()
        )['userData']['careers'];

        foreach ($careers as $career) {
            Career::insert($career);
        }
    }
}
