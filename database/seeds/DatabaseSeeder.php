<?php
// phpcs:disable
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PageSeeder::class);
        $this->call(CourseSeeder::class);
        $this->call(CareerSeeder::class);
        $this->call(ContributionSeeder::class);
        $this->call(JobSeeder::class);
        $this->call(SkillSeeder::class);
    }
}
