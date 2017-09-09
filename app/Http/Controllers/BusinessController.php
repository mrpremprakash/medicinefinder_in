<?php

namespace App\Http\Controllers;

use App\Models\Business as Business;
use App\Http\Controllers\Controller;

class BusinessController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function show()
    {
        $records = Business::all()->toArray();
        // print_r($records);
        // exit;
        return view('index', compact('records'));
    }

    public function save() {
        $postData = $_POST['postData'];
        foreach($postData as $input) {
            // print_r($input);
            Business::insert($input);
        }
        // print_r($_POST);
    }
    public function uploadProfile() {
        //print_r($_POST);
        $result = array(
            'url' => 'devices.jpg'
        );
        echo json_encode($result);
        exit;
    }
}
