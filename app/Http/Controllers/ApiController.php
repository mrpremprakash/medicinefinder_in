<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FrontUser;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;

class ApiController extends Controller
{
    

    /**
     * Store a newly created user in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function postRegister(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_name' => 'required',
            'user_email' => 'required|email|unique:users,email',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
            'profile_pic' => 'image|mimes:jpg,png',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json([
                                'status' => '0',
                                'result' => $errors->toJson()
            ]);
        }
        else{
            $password = Hash::make($request->password);
            $user = new FrontUser;
            $user->name = $request->user_name;
            $user->email = $request->user_email;
            $user->password = $password;
            $user->created_at = date('Y-m-d H:i:s');
            $user->updated_at = date('Y-m-d H:i:s');
            if($user->save()){
                $errors=array('result'=>'success');
                return response()->json([
                                'status' => '1',
                                'result' => $errors
                ]);
            }
            else{
                $errors=array('type'=>'db error');
                return response()->json([
                                'status' => '0',
                                'result' => $errors
                ]);
            }

        }

    }
    public function postLogin(Request $request){
        $validator = Validator::make($request->all(), [
            'user_email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json([
                                'status' => '0',
                                'result' => $errors->toJson()
            ]);
        }
        else{
            //$password = Hash::make($request->password);
            $user = FrontUser::where('email', $request->user_email)
                        //->where('password', $password)
                        ->first();
            if($user){
                if (Hash::check($request->password, $user->password)) {
                    $errors=array('type'=>'Sucess','user_details'=>$user->toArray());
                    return response()->json([
                                    'status' => '1',
                                    'result' => $errors
                    ]);
                }
                else{
                    $errors=array('type'=>'invalid email or password');
                    return response()->json([
                                    'status' => '0',
                                    'result' => $errors
                    ]);
                }
                
            }
            else{
                $errors=array('type'=>'invalid email or password');
                return response()->json([
                                'status' => '0',
                                'result' => $errors
                ]);
            }
        }
    }

}
