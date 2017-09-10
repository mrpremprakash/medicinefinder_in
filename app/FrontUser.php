<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FrontUser extends Model
{
    protected $table = 'front_users';
    protected $guarded = ['id'];
    protected $fillable = array('*');
    //public $timestamps = false;


    protected $hidden = [
        'password', 'remember_token',
    ];
}
