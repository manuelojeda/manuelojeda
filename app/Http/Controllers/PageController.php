<?php
// phpcs:disable
namespace App\Http\Controllers;

use App\Job;
use App\Page;
use App\Skill;
use App\Career;
use App\Course;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function indexHome()
    {
        $page = Page::select('content')->where('slug', 'home')->first();
        $skills = Skill::select('name', 'amount')->get();

        return view('welcome')
            ->with('page', $page)
            ->with('skills', $skills);
    }

    public function education ()
    {
        $response = collect([
            'careers' => collect(Career::get()->toArray()),
            'courses' => collect(Course::get()->toArray())
        ]);


        return view('education')
            ->with('education', $response);
    }

    public function getPage (String $slug)
    {
        if ($slug === 'education') {
            $response = collect([
                'careers' => collect(Career::get()->toArray()),
                'courses' => collect(Course::get()->toArray())
            ]);

            return view('education')
                ->with('education', $response);
        } else {
            $page = Page::select('title', 'content')
                ->where('slug', $slug)
                ->first();
            
            $response = $this->_getResponseData($slug);

            return view($slug)
                ->with('page', $page)
                ->with('data', $response);
        }
    }

    private function _getResponseData ($slug)
    {
        if ($slug === 'portfolio')
        {
            return Job::latest()->get();
        }
    }
}
