<?php
// phpcs:disable
namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Contribution extends Model
{
    protected $fillable = [
        'title',
        'n_stars',
        'n_response',
        'detail_url',
        'course_name',
    ];
}
