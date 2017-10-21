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
    public function showBusinessDetail($slug) {
        $business_detail = Business::get()->where('slug', $slug)->first()->toArray();
        $business_detail['images'] = array('../images/common/1.jpg');
        $business_detail['description'] = 'Curabitur odio nibh, luctus non pulvinar a, ultricies ac diam. Donec neque massa, viverra interdum eros ut, imperdiet pellentesque mauris. Proin sit amet scelerisque risus. Donec semper semper erat ut mollis. Curabitur suscipit, justo eu dignissim lacinia, ante sapien pharetra duin consectetur eros augue sed ex. Donec a odio rutrum, hendrerit sapien vitae, euismod arcu. Suspendisse potenti. Integer ut diam venenatis, pellentesque felis eget, elementum enim. Suspendisse sit amet massa commodo nulla iaculis fermentum. Integer eget tincidunt est, in imperdiet risus. Morbi sit amet urna purus.';
        if(!empty($_GET['type']) && $_GET['type'] == 'json') {
            echo json_encode($business_detail);
            exit;
        }
        $records = Business::all()->toArray();
        return view('index', compact('records', 'business_detail'));
    }
}
