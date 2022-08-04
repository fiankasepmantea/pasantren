<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Menu;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = [
            'username' => $request->email,
            'password' => $request->password
        ];

        if (!$token = Auth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthenticated, login failed'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logout success.']);
    }

    public function refresh()
    {
        return $this->respondWithToken(Auth::refresh());
    }

    public function user()
    {
        return response()->json(['data' => Auth::user()]);
    }

    protected function respondWithToken($token)
    {
        $user = Auth::user();
        $level = $user->userLevel;
        $menus = array();
        if(strtolower($level->nama)=='admin') {
            $menus = Menu::orderBy('order')->get();
        }
        else {
            $menus = $level->menus()->where('can_view', 1)->orderBy('order')->get();
        }
        return response()->json([
            'sessdata' => ['nama'=>$user->name,'level'=>$level->nama,'menu'=>$menus],
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}