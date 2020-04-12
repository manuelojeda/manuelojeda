<?php
// phpcs:disable
namespace App;

use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasSlug;

    protected $fillable = [
        'title',
        'content',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected $casts = [
        'content' => 'json'
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }
}
