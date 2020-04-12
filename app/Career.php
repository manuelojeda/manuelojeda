<?php
// phpcs:disable
namespace App;

use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    protected $fillable = [
        'title',
        'logo',
        'golden_achievement',
        'diploma_link',
        'active',
    ];
}
