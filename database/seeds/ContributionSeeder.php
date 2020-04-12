<?php
// phpcs:disable
use App\Contribution;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class ContributionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Contribution::truncate();
        $api_url = "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@".config('app.platzi_username');
        $contributions = collect(
            Http::get($api_url)->json()
        )['userData']['contributions'];

        foreach ($contributions as $contribution) {
            $contribution['created_at'] = null;
            Contribution::insert($contribution);
        }
    }
}
