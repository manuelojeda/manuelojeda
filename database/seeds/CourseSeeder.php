<?php
// phpcs:disable
use App\Course;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Course::truncate();
        $api_url = "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@".config('app.platzi_username');
        $courses = collect(
            Http::get($api_url)->json()
        )['userData']['courses'];

        foreach ($courses as $course) {
            Course::insert($course);
        }

        // dd($courses);

    }
}
