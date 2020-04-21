<?php
// phpcs:disable
namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $fillable = [
        'title',
        'content',
        'thumbnail',
        'images',
        'created_at',
        'updated_at',
        'deleted_at',
    ];
}
