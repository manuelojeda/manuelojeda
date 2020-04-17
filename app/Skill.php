<?php
// phpcs:disable
namespace App;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'name',
        'amount',
        'order'
    ];
}
