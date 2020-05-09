<?php
// phpcs:disable
namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Artisan;

class DashboardController extends Controller
{
    public function index()
    {
        return view('admin.dashboard');
    }

    public function updateEducation()
    {
        try {
            Artisan::call('db:seed --class CourseSeeder');
            Artisan::call('db:seed --class CareerSeeder');
    
            return collect([
                'band' => true,
                'html' => 'Education updated succesfully',
                'icon' => 'success'
            ]);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
