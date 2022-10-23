<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JetBrains\PhpStorm\NoReturn;

class ApiController extends Controller
{
    public function grabIP(Request $request) {
        return $request->ip();
    }
}
