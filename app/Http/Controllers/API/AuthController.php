<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}