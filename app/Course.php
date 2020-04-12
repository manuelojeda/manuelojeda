<?php
// phpcs:disable
namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
        'title',
        'badge',
        'url',
        'career',
        'diploma_link',
    ];
}
